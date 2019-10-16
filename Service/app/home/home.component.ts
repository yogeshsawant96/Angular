import { Component, OnInit } from '@angular/core';
import { AbcService } from '../abc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
 {
  public student=[];
  constructor(private abc:AbcService)
   {

    }
  
  ngOnInit() 
  {
    this.student=this.abc.getStudent();
  }

}
