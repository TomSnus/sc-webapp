import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/service/http.service';
import { ImageRunDialogComponent } from '../image/image-run-dialog/image-run-dialog.component';

@Component({
  selector: 'app-image-list-item',
  templateUrl: './image-list-item.component.html',
  styleUrls: ['./image-list-item.component.scss']
})
export class ImageListItemComponent implements OnInit {
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
  }
}
