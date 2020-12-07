import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-image-remove',
  templateUrl: './image-remove.component.html',
  styleUrls: ['./image-remove.component.scss']
})
export class ImageRemoveComponent implements OnInit {
  imageData: any;
  forceState = false;
  pruneState = false;

  constructor(private snackBar: MatSnackBar, public httpService: HttpService,
              public dialogRef: MatDialogRef<ImageRemoveComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.snackBar.open('Image removed', 'close', {
      duration: 2000,
    });
    this.dialogRef.close('!');
  }

  removeImage(): void {
    this.httpService.removeImage({ id: this.data.image.Id, force: this.forceState, prune: this.pruneState }).subscribe(
      err => console.error(err)
    );
    this.closeDialog();
  }
}
