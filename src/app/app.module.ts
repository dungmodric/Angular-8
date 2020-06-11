import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { VideosService } from './videos.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideosDetailComponent } from './videos-detail/videos-detail.component';
import { VideosFormComponent } from './videos-form/videos-form.component';
import { DungmodricComponent } from './dungmodric/dungmodric.component';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    VideosDetailComponent,
    VideosFormComponent,
    DungmodricComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot ([
      { path: '', component: VideosComponent},
      { path: 'detail/:VideoId', component: VideosDetailComponent},
      { path: 'add-video', component: VideosFormComponent},
      { path: 'edit-video/:VideoId', component: VideosFormComponent}
    ])
  ],
  providers: [VideosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
