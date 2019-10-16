import { Component, OnInit } from '@angular/core';
import { AbcService } from '../abc.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public student=[];
  constructor(private abc:AbcService)
   { }

  ngOnInit()
   {
    this.student=this.abc.getStudent();
  }

}
