import { User } from './../Models/userdata.model';
import { UserdataService } from './../userdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  constructor(private userserv:UserdataService) { }
  users:User[];
  user=new User("nayana",3,5);
   ngOnInit() {
    // this.getData();
   }
  // getData()
  //  {
  //  this.userserv.getData()
  //  .subscribe((data) => this.users=data);
  //  }
  addData()
  {
    this.userserv.addData(this.user)
    .subscribe((data) => {console.log("record added")});
  }
}
