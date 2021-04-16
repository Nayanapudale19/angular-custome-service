import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './Models/userdata.model';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }

  // private url:string="http://localhost:2000/user";

  getData():Observable<User[]>
  {
   return this.http.get<User[]>("http://localhost:2000/users");
  }
  addData(Obj:User):Observable<User>
  {
    return this.http.post<User>("http://localhost:2000/user",{
      "name":Obj.name,
      "water_intake":Obj.water_intake,
      "calories":Obj.calories
    });
  }
}
