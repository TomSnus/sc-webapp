import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-image-run-dialog',
  templateUrl: './image-run-dialog.component.html',
  styleUrls: ['./image-run-dialog.component.scss']
})
export class ImageRunDialogComponent implements OnInit {

  
  constructor(public httpService: HttpService, public dialogRef: MatDialogRef<ImageRunDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    dialogRef.afterClosed().subscribe(result => {
      
      });
  }

  ngOnInit(): void {
    console.log(this.data);
    console.log(this.data.image.Id);
  }

  closeDialog() {
    this.dialogRef.close('!');
  }

  runContainer(){
    this.httpService.runContainer({id: this.data.image.Id, name: this.data.image.Name, port: this.data.image.Port});
    this.closeDialog();
  }
}
