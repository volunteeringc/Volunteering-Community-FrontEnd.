import { Component, OnInit } from '@angular/core';
import {NewUser} from '../../new-user';
import axios from 'axios';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }
   userModel = new  NewUser ("","","");
  onSubmit(){
    console.log(this.userModel);
    axios.post("https://desolate-anchorage-26344.herokuapp.com/signup", {
      email:this.userModel.newEmail,
      password:this.userModel.newPassword,
      name:this.userModel.newName
    }).then(function(response) {
      console.log("res:", response);
    }).catch(function(err) {
      console.log("error:", err);
    })
  }
}
