import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:any= FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      Username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(form: FormGroup) {
    
    this.router.navigate(['/orders']);
  }
 
}
