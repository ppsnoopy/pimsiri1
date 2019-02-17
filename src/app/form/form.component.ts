import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { user } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private formBuild: FormBuilder
  ) 
  {

   }

  ngOnInit() {
    this.formGroup = this.formBuild.group(
      {
      firstName: this.formBuild.control('pimsiri'),
      lastName: ['chotikamongkhol'],
      Email:['ppsnoopy44@gmail.com'],
      number1: ['']
      } )
  }
  onSubmit(form: FormGroup){
    const {firstName, lastName, Email , number1} = form.value;
    const user1 = new user(firstName, lastName, Email, number1);
    console.log(user);
  }

}