import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { jsonpFactory } from '@angular/http/src/http_module';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/service/http.service';
import { ContainerDialogComponent } from './container-dialog/container-dialog.component';
import { ContainerInspectComponent } from './container-inspect/container-inspect.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  @Input() container: any
  @Output() refreshEvent = new EventEmitter<void>();
  test:any;
  state: string;
  loading = false;
  constructor(private httpService: HttpService, public dialog: MatDialog, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.state = this.container.State;
  }

  getLabel() {
    return this.container.Labels
  }

  onRun() {
    let dialogRef = this.dialog.open(ContainerDialogComponent, {
      data: { container: this.container },
    });
  }

  onInspect() {
    let dialogRef = this.dialog.open(ContainerInspectComponent, {
      data: { container: this.container },
    });
  }

  getPorts() {
    let ports: string[] = [];
    if (this.container.Ports === undefined)
      return ports;
    this.container.Ports.forEach(element => {
      ports.push(element.PrivatePort)
    });
    return ports;
  }

  isRunning() {
    return this.container.State === 'running';
  }

  //on container start/stop/remove the container data is reloaded
  onStop() {
    this.loading = true;
    this.httpService.stopContainer(this.container.Id).subscribe(
      err => console.error(err), () => this.refresh()
    );
  }

  onStart() {
    this.loading = true;
    this.httpService.startContainer(this.container.Id).subscribe(
      err => console.error(err), () => this.refresh()
    );
  }

  onRemove() {
    this.loading = true;
    this.httpService.removeContainer(this.container.Id).subscribe(
      err => console.error(err), () => this.refresh()
    );
  }

  refreshContainer(data: any) {
    console.log(data);
    this.container = this.httpService.getContainer(this.container.Id);
  }

  refresh() {
    this.refreshEvent.emit();
    this.loading = false;
  }
}
