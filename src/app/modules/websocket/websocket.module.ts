import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebsocketService} from './websocket.service';
import {config} from './websocket.config';
import {WebSocketConfig} from '../../models/websocket/websocket.model';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        WebsocketService
    ]
})
export class WebSocketModule {
    public static config(wsConfig: WebSocketConfig): ModuleWithProviders {
        return {
            ngModule: WebSocketModule,
            providers: [{ provide: config, useValue: wsConfig }]
        };
    }
}
