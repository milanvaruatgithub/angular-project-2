import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project-4';
  name ='';

  allownewserver=false;
  servercreationstatus='not server created';
  servername='';
  servercreated=false;
  servers =['server1','server2'];
  a=10;
  b=12;

  constructor()
  {
    setTimeout(() => {
        this.allownewserver = true;
      }, 2000);
    
  }

  oncreate()
  {
    this.servercreated=true;
    this.servers.push(this.servername);
    this.servercreationstatus='server was created  '+this.servername;
  }

  onupdateservername(event:Event)
  {
    this.servername=(<HTMLInputElement>event.target).value;
  }
  
}
