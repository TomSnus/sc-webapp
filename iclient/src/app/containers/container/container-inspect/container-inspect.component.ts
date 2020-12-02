import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-container-inspect',
  templateUrl: './container-inspect.component.html',
  styleUrls: ['./container-inspect.component.scss']
})
export class ContainerInspectComponent implements OnInit {
  containerData: any;

  constructor(public httpService: HttpService,
     public dialogRef: MatDialogRef<ContainerInspectComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  ngOnInit(): void {
    this.getContainers();
    console.log(this.containerData);
  }

  getContainers(): void {
    this.httpService.inspectContainer({id: this.data.container.Id}).subscribe(
      data => {this.containerData = data},
      err => console.error(err), () => console.log('loaded all containers...')
    );
  }

}
