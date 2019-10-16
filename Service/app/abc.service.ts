import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbcService {
  
  getStudent()
  {
  return [
    {name:'Yogesh Sawant',address:'satara'},
    {name:'Pramod Torase',address:'Pune'},
    {name:'Aniket Sanas',address:'Mumbai'}
  ];
}
  constructor() { }
}
