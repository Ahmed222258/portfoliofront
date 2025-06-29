import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillUrl = 'http://localhost:8000/skill';
skills: any[] = [];

async ngOnInit() {
  await this.getSkills();
}

async getSkills() {
  try {
    const response = await fetch(this.skillUrl);
    const data = await response.json();
    this.skills = data;
  } catch (error) {
    console.error('Error fetching skills:', error);
  }
}

}
