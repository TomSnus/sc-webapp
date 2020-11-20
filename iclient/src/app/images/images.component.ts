import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpService } from '../service/http.service';
import { Images } from '../shared/images.model';

export interface Tile {
 // color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  imageList: Object;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.httpService.getImages().subscribe(
      data => {this.imageList = data},
      err => console.error(err), () => console.log('loaded images...')
    );
  }
}
