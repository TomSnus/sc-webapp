import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/service/http.service';
import { ImageInspectComponent } from './image-inspect/image-inspect.component';
import { ImageRemoveComponent } from './image-remove/image-remove.component';
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
  }

  onInspect(){
    let dialogRef = this.dialog.open(ImageInspectComponent, {
      data: { image: this.image },
    });
  }

  onRemove(){
    let dialogRef = this.dialog.open(ImageRemoveComponent, {
      data: { image: this.image },
    });
  }
}
