import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-auser',
  imports: [FormsModule,CommonModule],
  templateUrl: './auser.component.html',
  styleUrl: './auser.component.css'
})
export class AuserComponent {
 user = {
    name: '',
    birtdate: '',
    phonenumber: '',
    email: ''
  };

  async submitForm() {
    try {
      const response = await fetch('http://localhost:8000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.user)
      });

      if (!response.ok) {
        const error = await response.json();
        alert('Server Error: ' + (error.message || 'Unknown error'));
        return;
      }

      const result = await response.json();
      alert('User created successfully!');
      console.log(result);
    } catch (err) {
      console.error('Fetch error:', err);
      alert('Network error');
    }
  }
}



