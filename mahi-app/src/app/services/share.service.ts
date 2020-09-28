import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ShareService {

  dataDefault1 = [];
  dataDefault2 = [];
  siteContent = [];
  

  constructor(private http: HttpClient) { }
  private dataSource1 = new BehaviorSubject<any>(this.dataDefault1);
  content =  this.dataSource1.asObservable();
  private dataSource2 = new BehaviorSubject<any>(this.dataDefault2);
categories = this.dataSource2.asObservable();

public setSiteContent(content) {
  this.dataSource1.next(content);
}

public setCategories(categories) {
  this.dataSource2.next(categories);
}

public getCategories(){
  return this.http.get('../../assets/products.json');

}


}
