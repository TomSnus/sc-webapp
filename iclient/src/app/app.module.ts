import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { ContainersComponent } from './containers/containers.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpService } from './service/http.service';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { ImageComponent } from './images/image/image.component';
import {MatListModule} from '@angular/material/list';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { ImageRunDialogComponent } from './images/image/image-run-dialog/image-run-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import {MatFormFieldModule} from '@angular/material/form-field';

const routes: Routes = [
  { path: 'images-component', component: ImagesComponent },
  { path: 'containers-component', component: ContainersComponent },
]; @NgModule({
  declarations: [
    AppComponent,
    ImagesComponent, 
    ContainersComponent, ImageComponent, ImageRunDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    FormsModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatGridListModule,
    HttpClientModule,
    MatListModule,
    ScrollingModule,
    MatDialogModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
