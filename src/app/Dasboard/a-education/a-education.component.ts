import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-a-education',
  imports: [FormsModule,CommonModule],
  templateUrl: './a-education.component.html',
  styleUrl: './a-education.component.css'
})
export class AEducationComponent {
education = {
    place: '',
    sdate: '',
    edate: '',
    grade:'',

  };
  async submitForm() {
    try {
      const response = await fetch('http://localhost:8000/education', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.education)
      });

      if (!response.ok) {
        const error = await response.json();
        alert('Server Error: ' + (error.message || 'Unknown error'));
        return;
      }

      const result = await response.json();
      alert('education added successfully!');
      console.log(result);
    } catch (err) {
      console.error('Fetch error:', err);
      alert('Network error');
    }
  }
}
