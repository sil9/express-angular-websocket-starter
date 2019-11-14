import {Component, OnDestroy, OnInit} from '@angular/core';
import {WebsocketService} from './modules/websocket/websocket.service';
import {ws} from './modules/websocket/ws.endpoints.events';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'express-angular-websocket-starter';

  private unsubscribe$ = new Subject<void>();

  constructor(private wsService: WebsocketService) {
  }

  ngOnInit(): void {
    this.wsService.on<{key: string, count: number}>(ws.on.alarms).pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
