import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss']
})

export class ContainersComponent implements OnInit {
  imageList: Object;
  imageFavList: any;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.httpService.getContainers('').subscribe(
      data => {this.imageFavList = data},
      err => console.error(err), () => console.log('loaded running containers...')
    );
    this.httpService.getContainers('*').subscribe(
      data => {this.imageList = data},
      err => console.error(err), () => console.log('loaded all containers...')
    );
  }
}

