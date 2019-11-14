import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WebSocketModule} from './modules/websocket/websocket.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WebSocketModule.config({
      url: 'ws://localhost:4000/'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
