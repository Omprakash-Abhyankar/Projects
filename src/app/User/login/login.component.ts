import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator } from '@angular/forms';
import { Router } from '@angular/router';
import google, { CredentialResponse,PromptMomentNotification } from 'google-one-tap';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
 
  constructor(private fb:FormBuilder,
    private router:Router,
    private service:AuthService,
    private _ngzone:NgZone
  ) {
    
    
  }
  ngOnInit(): void {
//     window.onGoogleLibraryLoad  = () => {
//       google.accounts.id.initialize({
//         client_id:'',
//         callback: this.handleCredentialResponse.bind(this),
//         auto_select:false,
//         cancel_on_tap_outside:true
//       });
//       google.accounts.id.renderButton(
//         document.getElementById('buttonDiv'),
//         {theme:"outline", size: "large",width:"100%"}
//       );
//         google.accounts.id.prompt((notification:PromptMomentNotification) =>{});
//     };
//   }
// async handleCredentialResponse(response:CredentialResponse){
//   await this.service.LoginWithGoogle(response.credential).subscribe(
//     (x:any) => {
//       localStorage.setItem("token", x.token);
//       this._ngzone.run(() => {
//         this.router.navigate(['/logout']);
//       })},
//       (error:any) => {
//         debugger
//         console.log('Error');
//       }
//   )
// }
  }
}
