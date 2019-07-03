import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import axios from 'axios';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  userModel = new User ("","")  ;
  
  onSubmit(){
    console.log(this.userModel);
    console.log(this.userModel);
    axios.post("https://desolate-anchorage-26344.herokuapp.com/login ", {
      email:this.userModel.Uemail,
      password:this.userModel.Upassword,
    }).then(function(response) {
      console.log("res:", response);
    }).catch(function(err) {
      console.log("error:", err);
    })
  }
}
