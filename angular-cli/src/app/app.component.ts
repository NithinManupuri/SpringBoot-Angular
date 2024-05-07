import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentserviceService } from './studentservice.service';
import { StudentInfo } from './student-info';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-cli';

  constructor(private service: StudentserviceService){}

  msg: string='';
  status: boolean=false;
  info: StudentInfo=new StudentInfo("","",0)
   studInfo: StudentInfo[]=[]
    formInfo(){
  
      this.service.sendInfo(this.info).subscribe(res =>{
        this.msg=res
      })
    }

    getInfo(){
      this.service.getInfo().subscribe(res=>{
        this.status=true
        this.studInfo=res
      })
    }


    hide(){
      this.status=false;
    }

}
