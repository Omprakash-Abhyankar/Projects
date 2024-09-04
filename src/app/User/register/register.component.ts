import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  loading = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
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
  firstname: this.form.value.firstName,
  lastname: this.form.value.lastName,
  username : this.form.value.username,
  password: this.form.value.password,


}
    this.loading = true;
    // Handle form submission, e.g., send to server
    // Simulate async operation
    setTimeout(() => {
      localStorage.setItem('formData', JSON.stringify(formData))
      this.loading = false;
      alert('Form submitted successfully!');
    }, 1000);
  }
}
