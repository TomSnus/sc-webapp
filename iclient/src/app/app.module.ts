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
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ImageRunDialogComponent } from './images/image/image-run-dialog/image-run-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerComponent } from './containers/container/container.component';
import { ContainerDialogComponent } from './containers/container/container-dialog/container-dialog.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from "./home/home.component";
import { ConvertComponent } from './convert/convert.component';
import { FaqComponent } from './faq/faq.component';
import { ContainerInspectComponent } from './containers/container/container-inspect/container-inspect.component';
import { ImageListItemComponent } from './images/image-list-item/image-list-item.component';

const routes: Routes = [
  { path: 'images-component', component: ImagesComponent },
  { path: 'containers-component', component: ContainersComponent },
  { path: 'home', component: HomeComponent },
  { path: 'convert-component', component: ConvertComponent },
  { path: 'faq-component', component: FaqComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
]; @NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    ContainersComponent, ImageComponent, ImageRunDialogComponent, ContainerComponent, ContainerDialogComponent, HomeComponent, ConvertComponent, FaqComponent, ContainerInspectComponent, ImageListItemComponent
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
    MatInputModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
