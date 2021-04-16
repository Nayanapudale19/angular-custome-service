import { Component, OnInit } from '@angular/core';
import { User } from '../Models/userdata.model';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userserv:UserdataService) { }

  users:User[];
  user=new User("nayana",3,5);

  ngOnInit() {
    this.getData();
  }
  getData()
  {
    this.userserv.getData()
    .subscribe((data) => this.users=data);
  }
}
