import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-container-dialog',
  templateUrl: './container-dialog.component.html',
  styleUrls: ['./container-dialog.component.scss']
})
export class ContainerDialogComponent implements OnInit {

  constructor(public httpService: HttpService, public dialogRef: MatDialogRef<ContainerDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar) {
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  ngOnInit(): void {
    console.log(this.data);
    console.log(this.data.container.Id);
  }

  closeDialog() {
    this.dialogRef.close('!');
  }

  commitContainer() {
    this.httpService.commitContainer({
      id: this.data.container.Id,
      repo: this.data.container.Repo,
      tag: this.data.container.Tag,
      comment: this.data.container.Comment });
    this.closeDialog();
    this.snackBar.open("Container commited 🐳️", "close", {
      duration: 2000,
    });
  }
}
