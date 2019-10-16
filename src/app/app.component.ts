import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {
  title = 'asd';
  counter:number=0;

  pressed()
  {
    this.counter=this.counter+1;
  }

}
