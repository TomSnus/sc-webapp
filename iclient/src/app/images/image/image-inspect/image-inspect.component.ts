import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-image-inspect',
  templateUrl: './image-inspect.component.html',
  styleUrls: ['./image-inspect.component.scss']
})
export class ImageInspectComponent implements OnInit {
  imageData: any;

  constructor(public httpService: HttpService,
    public dialogRef: MatDialogRef<ImageInspectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  ngOnInit(): void {
    this.getImageData();
  }

  getImageData(): void {
    this.httpService.inspectImage({ id: this.data.image.Id }).subscribe(
      data => { this.imageData = data },
      err => console.error(err), () => console.log('inspect image...')
    );
  }
}
