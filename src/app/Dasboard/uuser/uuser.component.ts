import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-uuser',
  imports: [FormsModule,CommonModule],
  templateUrl: './uuser.component.html',
  styleUrl: './uuser.component.css'
})
export class UuserComponent {

    user = {
    name: '',
    birtdate: '',
    phonenumber: '',
    email: ''
  };
async submitForm() {
  try {
    const response = await fetch('http://localhost:8000/user', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.user)
    });

    if (!response.ok) {
      const error = await response.json();
      alert('Update failed: ' + (error.message || 'Unknown error'));
      return;
    }

    const result = await response.json();
    alert('User updated successfully!');
    console.log(result);
  } catch (err) {
    console.error('Fetch error:', err);
    alert('Network error');
  }
}

}


