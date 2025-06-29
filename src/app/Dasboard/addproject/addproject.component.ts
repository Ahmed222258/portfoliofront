import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addproject',
  imports: [FormsModule,CommonModule],
  templateUrl: './addproject.component.html',
  styleUrl: './addproject.component.css'
})
export class AddprojectComponent {
project = {
    pname: '',
    plink: '',
    descrbtion: '',


  };
  async submitForm() {
    try {
      const response = await fetch('http://localhost:8000/project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.project)
      });

      if (!response.ok) {
        const error = await response.json();
        alert('Server Error: ' + (error.message || 'Unknown error'));
        return;
      }

      const result = await response.json();
      alert('project added successfully!');
      console.log(result);
    } catch (err) {
      console.error('Fetch error:', err);
      alert('Network error');
    }
  }
}


