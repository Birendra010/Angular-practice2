import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import{HttpClientModule} from '@angular/common/http'
import { PostService } from './services/post.service';


@NgModule({
  declarations: [
    AppComponent,
    HttpRequestComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
