import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentInfo } from './student-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  constructor(private http: HttpClient) { }


  sendInfo(info :StudentInfo){
    
   return  this.http.post("http://localhost:8080/save",info,{responseType:'text'})
  }

  getInfo(): Observable<StudentInfo[]>{
    return this.http.get<StudentInfo[]>("http://localhost:8080/get")
  }

}
