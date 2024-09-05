import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import google, { CredentialResponse,PromptMomentNotification } from 'google-one-tap';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  form!: FormGroup;
  submitted = false;
  loading = false;
  is_valid:boolean=true;
  
  constructor(
    private fb:FormBuilder,
    private route:Router
    
  ) {
    
    
  }
  ngOnInit(): void {
    this.form = this.fb.group({      
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.form.controls;
  }
  hasError(controlName: string, errorName: string): boolean {
    const control = this.f[controlName];
    return control && control.touched && control.errors?.[errorName];
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
let formData = {  
  username : this.form.value.username,
  password: this.form.value.password,


}
    this.loading = true;
    
    const jsonData = localStorage.getItem('formData');
    if (jsonData) {    
    const  data = JSON.parse(jsonData);
    console.log(data.firstName);
    console.log(data.lastName);
    console.log(data.username);
    console.log(data.password);
    if(data.username != this.form.value.username){
      alert('Username Does Not Exist')
      this.is_valid = false;
      this.loading = false;
        return
    }
    if(data.password != this.form.value.password){
        alert('Password is Wrong!.');
        this.is_valid = false;
        this.loading = false;
        return
    }
    if(this.is_valid){
      this.route.navigate(['/home']);
      alert('Congratulations!, Login Successfull.');
    }
         }
       }
    }
    
    // Handle form submission, e.g., send to server
    // Simulate async operation
    // setTimeout(() => {
    //   localStorage.setItem('formData', JSON.stringify(formData))
    //   this.loading = false;
    //   alert('Form submitted successfully!');
    // }, 1000);


