import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  isCardView = true;
  imageList: any;
  imageFavList: any;
  filter = 'latest';
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.httpService.getImages(this.filter).subscribe(
      data => {this.imageFavList = data; },
      err => console.error(err), () => console.log('loaded fav images...')
    );
    this.httpService.getImages('*').subscribe(
      data => {this.imageList = data; },
      err => console.error(err), () => console.log('loaded images...')
    );
  }

  onFilter(): void{
    this.getImages();
  }

  setCardView(value: boolean): void{
    this.isCardView = value;
  }
}
