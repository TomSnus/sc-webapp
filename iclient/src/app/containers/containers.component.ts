import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss']
})

export class ContainersComponent implements OnInit {
  imageList: object;
  imageFavList: any;
  filter = '';
  toggleState = false;

  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.toggleState = params.running === '1' ? true : false;
      }
    );
    this.getContainers();
  }

  getContainers(): void {
    this.httpService.getContainers({ showRunning: this.toggleState, filter: this.filter }).subscribe(
      data => { this.imageList = data; },
      err => console.error(err), () => console.log('loaded all containers...')
    );
  }

  onFilter(): void {
    this.getContainers();
  }

  toggleContainers(event: MatSlideToggleChange): void {
    console.log('toggle', event.checked);
    this.toggleState = event.checked;
    this.getContainers();
  }

  refreshList(): void {
    this.getContainers();
  }
}

