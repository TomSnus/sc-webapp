import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/service/http.service';
import { ImageRunDialogComponent } from './image-run-dialog/image-run-dialog.component';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() image: any

  constructor(private httpService: HttpService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getLabel(){
    return this.image.Labels
  }

  onRun(){
    let dialogRef = this.dialog.open(ImageRunDialogComponent, {
      data: { image: this.image },
    });
    //this.httpService.runContainer(this.image.Id);
  }
}
