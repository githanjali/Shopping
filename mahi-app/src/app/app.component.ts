import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mahi-app';
  isLoading: Boolean = true;
  ngOnInit(){
    this.isLoading = false;

  }

}
