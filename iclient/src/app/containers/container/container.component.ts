import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private httpService: HttpService, public dialog: MatDialog) { }

  ngOnInit(): void {
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
    let ports: string[] = []
    this.container.Ports.forEach(element => {
      ports.push(element.PrivatePort)
    });
    return ports;
  }

  onStop(){
    this.httpService.stopContainer(this.container.Id);
  }

  onStart(){
    this.httpService.startContainer(this.container.Id);
  }

  onRemove(){
    this.httpService.removeContainer(this.container.Id);
  }
}
