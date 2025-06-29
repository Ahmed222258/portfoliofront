import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-educationshow',
  imports: [CommonModule],
  templateUrl: './educationshow.component.html',
  styleUrl: './educationshow.component.css'
})
export class EducationshowComponent {
url = 'http://localhost:8000/education';
  u: any[] = []; // store the first user

  async ngOnInit() {
    await this.geteducation();
  }

  async geteducation() {
    try {
      const res = await fetch(this.url);
      const education = await res.json();

      this.u = education;
    } catch (error) {
      console.error('Error fetching education:', error);
    }
  }
}


