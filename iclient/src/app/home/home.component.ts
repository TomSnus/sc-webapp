import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../service/http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  info: any;
  constructor(private router: Router, private httpService: HttpService) { }
  
  ngOnInit(): void {
    this.getInfo();
  }

  gotoRoute(routeLink: string){
    this.router.navigate([routeLink]);
  }

  getInfo(){
    this.httpService.getInfo().subscribe(
      data => {this.info = data},
      err => console.error(err), () => console.log('loaded info...')
    );
  }

}
