import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { jsonpFactory } from '@angular/http/src/http_module';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/service/http.service';
import { ContainerDialogComponent } from './container-dialog/container-dialog.component';
import { ContainerInspectComponent } from './container-inspect/container-inspect.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  @Input() container: any;
  @Output() refreshEvent = new EventEmitter<void>();
  test: any;
  state: string;
  loading = false;
  constructor(private snackBar: MatSnackBar,
              private httpService: HttpService,
              public dialog: MatDialog, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.state = this.container.State;
  }

  getLabel(): void {
    return this.container.Labels;
  }

  onRun(): void {
    this.dialog.open(ContainerDialogComponent, {
      data: { container: this.container },
    });
  }

  onInspect(): void {
    this.dialog.open(ContainerInspectComponent, {
      data: { container: this.container },
    });
  }

  getPorts(): string[] {
    const ports: string[] = [];
    if (this.container.Ports === undefined) {
      return ports;
    }
    this.container.Ports.forEach(element => {
      ports.push(element.PrivatePort);
    });
    return ports;
  }

  isRunning(): boolean {
    return this.container.State === 'running';
  }

  // on container start/stop/remove the container data is reloaded
  onStop(): void {
    this.loading = true;
    this.httpService.stopContainer(this.container.Id).subscribe(
      msg => this.refresh('Container stopped')
    );
  }

  onStart(): void {
    this.loading = true;
    const stopObs = this.httpService.startContainer(this.container.Id);
    stopObs.subscribe(
      msg => this.refresh('Container started')
    );
  }

  onRemove(): void {
    this.loading = true;
    this.httpService.removeContainer(this.container.Id).subscribe(
      msg => this.refresh('Container removed')
    );
  }

  refreshContainer(data: any): void {
    console.log(data);
    this.container = this.httpService.getContainer(this.container.Id);
  }

  refresh(msg: string): void {
    this.refreshEvent.emit();
    this.loading = false;
    this.snackBar.open(msg, 'close', {
      duration: 2000,
    });
  }

  onRestart(): void {
    this.loading = true;
    this.httpService.restartContainer(this.container.Id).subscribe(
      msg => this.refresh('Container restarted')
    );
  }

  onLogs(): void {
    this.loading = true;
    this.httpService.containerLogs(this.container.Id).subscribe(
      msg => this.refresh('Container restarted')
    );
  }
}
