import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { ExpthreadComponent } from './expthread/expthread.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPostComponent } from './main-post/main-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ExpthreadComponent,
    MainPostComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
