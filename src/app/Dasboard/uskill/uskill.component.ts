import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-uskill',
  imports: [CommonModule,FormsModule],
  templateUrl: './uskill.component.html',
  styleUrl: './uskill.component.css'
})
export class UskillComponent {
skills: any[] = [];
skill = {
  _id: '',
  sname: '',
  sdesc: '',
  level: ''
};

ngOnInit() {
  this.loadSkills();
}

async loadSkills() {
  try {
    const res = await fetch('http://localhost:8000/skill');
    const data = await res.json();
    this.skills = data;
  } catch (err) {
    console.error('Error loading skills:', err);
  }
}

onSkillCardClick(item: any) {
  this.skill = { ...item };
}

async onSkillUpdate() {
  try {
    const res = await fetch('http://localhost:8000/skill', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.skill)
    });

    const result = await res.json();
    console.log('Updated skill:', result);
    this.loadSkills();
  } catch (err) {
    console.error('Error updating skill:', err);
  }
}

}
