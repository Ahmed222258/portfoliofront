import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-askill',
  imports: [FormsModule,CommonModule],
  templateUrl: './askill.component.html',
  styleUrl: './askill.component.css'
})
export class AskillComponent {
skill = {
  sname: '',
  sdesc: '',
  level: ''
};

async submitSkillForm() {
  try {
    const response = await fetch('http://localhost:8000/skill', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.skill)
    });

    if (!response.ok) {
      const error = await response.json();
      alert('Server Error: ' + (error.message || 'Unknown error'));
      return;
    }

    const result = await response.json();
    alert('Skill added successfully!');
    console.log(result);
  } catch (err) {
    console.error('Fetch error:', err);
    alert('Network error');
  }
}

}
