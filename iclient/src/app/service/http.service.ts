import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})export class HttpService {


    runContainer(data: any) {
        const headers = new HttpHeaders({
            'content-type' : 'application/json',
            'Access-Control-Allow-Origin' : '*'
          });
          const options = {
            headers: headers,
            responseType: 'text'
            };
        this.http.post<any>('http://localhost:9000/operations/createContainer', {image: data.id, name: data.name, port: data.port})
          .subscribe(data => {
            console.log(data);
          });
    }
    
    constructor(private http:HttpClient) {}

    getImages(filter: string) {
        return this.http.get('http://localhost:9000/listimages/'+filter);
            //.map(response => response.json());
    }
}