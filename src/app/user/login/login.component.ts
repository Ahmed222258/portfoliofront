import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  async onLogin() {
    try {
      const res = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: this.email, password: this.password })
      });

      const data = await res.json();

      if (res.ok && data.accessToken) {
        localStorage.setItem('token', data.accessToken);
        this.router.navigate(['/dashboard']);
      } else {
        this.error = data.message || 'Login failed';
      }
    } catch (err) {
      this.error = 'Server error';
    }
  }
}
