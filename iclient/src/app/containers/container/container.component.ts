import { Component, Input, OnInit } from '@angular/core';
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

  getLabel(){
    return this.container.Labels
  }

  onRun(){
    let dialogRef = this.dialog.open(ContainerDialogComponent, {
      data: { container: this.container },
    });
  }

  onInspect(){
    let dialogRef = this.dialog.open(ContainerInspectComponent, {
      data: { container: this.container },
    });
  }
}
