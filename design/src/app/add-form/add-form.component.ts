import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Validator,maxLength, FormValidator } from '../validator';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  formObj=new FormValidator();

  constructor() { }
loginForm:FormGroup;

  ngOnInit() {
    this.createForm();
  }


  createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validator(/^[a-zA-Z0-9]+$/), maxLength()]),
      passwrd: new FormControl('', [Validators.required, Validator(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,8})/), maxLength1(), this.formObj.passWord()]),
      confirmpasswd: new FormControl('', [Validators.required, this.formObj.checkPassWord()]),
      email: new FormControl('', [Validators.required, Validator(/(\w+)\@(\w+)\.[a-zA-Z]/g)]),
      // dob: new FormControl('',[Validators.required, maxAge()]),
      // time1:new FormControl('',[Validators.required,this.formObj.checkStartTime(),this.formObj.checkInvalidDateFormat1()]),
      // time2:new FormControl('',[Validators.required,this.formObj.checkEndTime(),this.formObj.checkInvalidDateFormat2()])

    })
  }
  onSubmit(){

  }


}
