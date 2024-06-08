import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './app.server.html',
  styleUrls: ['./app.server.css'],
  styles: [
    `.online {
      color: green;
    }`
  ]
})
export class Server {
  @Input() serverId: number = 10;
  serverStatus: string = 'offline';
  username='';
  servers =['testserver ','testserver 2'];

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getBackgroundColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
