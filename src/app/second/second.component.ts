import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})

export class SecondComponent implements OnInit {
  response = '';
  currentUser = 'Umar';
  title= 'SecondComponent';
  endpoint = 'localhost:8081/user?id=2';
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    const response = this.http.get(this.endpoint, {responseType: 'json'});
    console.log(JSON.stringify(response));
  }

  getValue(): number {
    return 2;
  }

  customers = [
    { name: 'Abu Bakar' },
    { name: 'Umar' },
    { name: 'Usman' },
    { name: 'Ali' }

  ];
  deleteHero(){
    console.log('hero deleted!');
  }
}
