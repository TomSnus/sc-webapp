import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-image-run-dialog',
  templateUrl: './image-run-dialog.component.html',
  styleUrls: ['./image-run-dialog.component.scss']
})
export class ImageRunDialogComponent implements OnInit {

  
  constructor(private router: Router, public httpService: HttpService, public dialogRef: MatDialogRef<ImageRunDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar) {
    dialogRef.afterClosed().subscribe(result => {
      
      });
  }

  ngOnInit(): void {
    console.log(this.data);
    console.log(this.data.image.Id);
  }

  closeDialog() {
    this.dialogRef.close('!');
    this.snackBar.open("Container started 🐳️", "close", {
      duration: 2000,
    });
  }

  runContainer(){
    this.httpService.runContainer({id: this.data.image.Id, name: this.data.image.Name, port: this.data.image.Port});
    this.closeDialog();
    let snack = this.snackBar.open("Container started 🐳️", "go to", {
      duration: 2000,
    });
    snack.onAction().subscribe(() => {
      this.router.navigate(['containers-component'], {queryParams: {running:1}});
    });
  }
}
