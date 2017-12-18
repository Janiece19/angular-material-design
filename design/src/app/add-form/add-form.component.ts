import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Validator, maxLength, FormValidator, maxLength1 } from '../validator';
import { Gender, User } from "../model";
import { Observable } from "rxjs/Observable";
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { DialogComponenetComponent } from "../dialog-componenet/dialog-componenet.component";
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  formObj=new FormValidator();
  selectedGender:string;
  isValidFormSubmitted: boolean = null;
  user=new User();
  animal: string;
  name: string;


  constructor(public dialog:MatDialog) { }
loginForm:FormGroup;
  filteredOptions: Observable<string[]>;

  options = [
    'Karnataka',
    'Kerala',
    'Punjab'
  ];


  ngOnInit() {
    this.createForm();
        this.filteredOptions = this.loginForm.controls.state.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
  
  }


genders:Array<Gender>=[
  {id:1,name:'Male'},
  {id:2,name:'Female'},
  
]
  createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validator(/^[a-zA-Z0-9]+$/), maxLength()]),
      lastname: new FormControl('', [Validators.required,  maxLength()]),
      // passwrd: new FormControl('', [Validators.required, Validator(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,8})/), maxLength1(), this.formObj.passWord()]),
      // confirmpasswd: new FormControl('', [Validators.required, this.formObj.checkPassWord()]),
      email: new FormControl('', [Validators.required, Validator(/(\w+)\@(\w+)\.[a-zA-Z]/g)]),
      state:new FormControl('',Validators.required),
      countrycontrol:new FormControl('',Validators.required),
      // dob: new FormControl('',[Validators.required, maxAge()]),
      // time1:new FormControl('',[Validators.required,this.formObj.checkStartTime(),this.formObj.checkInvalidDateFormat1()]),
      // time2:new FormControl('',[Validators.required,this.formObj.checkEndTime(),this.formObj.checkInvalidDateFormat2()])

    })
  }
  onsubmit(){
    console.log("inside submit");
     this.isValidFormSubmitted = false;
	   if(this.loginForm.invalid){
		return;	
	   } 	
	   this.isValidFormSubmitted = true;	
	   console.log(this.loginForm.valid);
	   this.user.firstName = this.loginForm.get('username').value;
     console.log(this.user.firstName)
	   this.user.lastName = this.loginForm.get('lastname').value;
          console.log(this.user.lastName)
	   this.user.email = this.loginForm.get('email').value;
          console.log(this.user.email)
	  //  this.user.isMarried = this.loginForm.get('married').value;
	  //  this.user.isTCAccepted = this.loginForm.get('tc').value;
	  //  this.userService.createUser(this.user);	 
	  //  this.reset();

  }
  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  
 countries = [
    {name: 'India', id: '1'},
    {name: 'Canada', id: '2'},
    {name: 'China', id: '3'},
    {name: 'Nepal', id: '4'},
  ];

openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponenetComponent, {
      width: '250px',
      data: { name: this.user.firstName, animal: this.animal }
    });
     dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }




}
