import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
}) export class HttpService {

    constructor(private http: HttpClient) { }

    getInfo() {
        return this.http.get('http://localhost:9000/operations/info');
    }

    inspectContainer(data: { id: any; }) {
        console.log(data.id);
        const parameters = new HttpParams()
            .set('id', data.id)
        return this.http.get('http://localhost:9000/operations/container/inspect/', { params: parameters });
    }


    commitContainer(data: any) {
        this.http.post<any>('http://localhost:9000/operations/commit', { id: data.id, tag: data.tag, repo: data.repo, comment: data.comment })
            .subscribe(data => {
                console.log(data);
            });
    }

    getContainers(data: any) {
        const parameters = new HttpParams()
            .set('showRunning', data.showRunning)
            .set('filter', data.filter)
        return this.http.get('http://localhost:9000/listcontainers/', { params: parameters });
    }


    runContainer(data: any) {
        const headers = new HttpHeaders({
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        const options = {
            headers: headers,
            responseType: 'text'
        };
        this.http.post<any>('http://localhost:9000/operations/createContainer', { image: data.id, name: data.name, port: data.port })
            .subscribe(data => {
                console.log(data);
            });
    }

    getImages(filter: string) {
        return this.http.get<any>('http://localhost:9000/listimages/' + filter).pipe(
            map(results => results.sort((a, b) => (a.RepoTags < b.RepoTags))
            ));
    }

    stopContainer(id: string) {
        const parameters = new HttpParams()
            .set('id', id)
        return this.http.get('http://localhost:9000/operations/container/stop/', { params: parameters });
    }

    startContainer(id: string) {
        const parameters = new HttpParams()
            .set('id', id)
        return this.http.get('http://localhost:9000/operations/container/start/', { params: parameters });
    }

    removeContainer(id: string) {
        const parameters = new HttpParams()
            .set('id', id)
        return this.http.get('http://localhost:9000/operations/container/remove/', { params: parameters });
    }

    getContainer(id: string) {
        const parameters = new HttpParams()
            .set('id', id)
        return this.http.get('http://localhost:9000/listContainers/get/', { params: parameters }).subscribe(data => {
            console.log(data);
        });
    }
}