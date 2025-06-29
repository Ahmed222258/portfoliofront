import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [CommonModule, ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  url = 'http://localhost:8000/project';
  u: any[] = []; // store the first user

  async ngOnInit() {
    await this.getproject();
  }

  async getproject() {
    try {
      const res = await fetch(this.url);
      const education = await res.json();

      this.u = education;
    } catch (error) {
      console.error('Error fetching project:', error);
    }
  }
}




