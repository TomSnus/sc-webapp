import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss']
})

export class ContainersComponent implements OnInit {
  imageList: Object;
  imageFavList: any;
  filter: string = '';
  toggleState = false;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getContainers();
  }

  getContainers(): void {
    this.httpService.getContainers({showRunning: this.toggleState, filter: this.filter}).subscribe(
      data => {this.imageList = data},
      err => console.error(err), () => console.log('loaded all containers...')
    );
  }

  onFilter(){
    this.getContainers();
  }

  toggleContainers(event: MatSlideToggleChange){
    console.log('toggle', event.checked);
    this.toggleState = event.checked 
    this.getContainers();
  }
}

