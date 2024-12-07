import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  

  constructor(public http: HttpClient) { }

  getData(){
    return this.http.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles');
    // return this.http.get('https://jsonplaceholder.typicode.com/todos')

  }
}
