import { Component, ViewChild } from '@angular/core';
import axios from "axios"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'say-hello-interface';
  message:string = "";
  @ViewChild('name') input: any;
  

  ngOnInit(){
    this.message = "hi"
    axios.get("http://localhost:8080/say-hello/"+this.input).then(res=>{
      this.message = res.data;
    })
  }
}
