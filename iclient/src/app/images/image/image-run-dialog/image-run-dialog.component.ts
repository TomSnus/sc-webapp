import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-run-dialog',
  templateUrl: './image-run-dialog.component.html',
  styleUrls: ['./image-run-dialog.component.scss']
})
export class ImageRunDialogComponent implements OnInit {
  imagedata: any;
  
  constructor(public dialogRef: MatDialogRef<ImageRunDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  closeDialog() {
    this.dialogRef.close('!');
  }
}
