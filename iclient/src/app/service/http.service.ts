import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})export class HttpService {
    
    constructor(private http:HttpClient) {}

    getImages() {
        return this.http.get('http://localhost:9000/listimages/*');
            //.map(response => response.json());
    }
}