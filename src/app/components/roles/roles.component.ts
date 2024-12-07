import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { Observable } from 'rxjs';
import { DataServiceService } from '../services/data-service.service';


@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
})
export class RolesComponent implements OnInit {
  roleList: any[] = [];
  http = inject(HttpClient);

  constructor(private dataService:DataServiceService){

  }

  storeString: string="../../../assets/apiCallsFolder/data.json"

  firstName: string = 'Angular tutorial';
  version: number = 18;
  isActive: boolean = false;
  currentDate: Date = new Date();
  selectedState: string = '';

  ngOnInit(): void {   
    this.dataService.getData().subscribe((res)=>{console.log("result",res)})
  }

  getData(){

    // return this.http.get('/assets/apiCallsFolder/data.json')

  }
}
