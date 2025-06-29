import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-updateproject',
  imports: [CommonModule,FormsModule],
  templateUrl: './updateproject.component.html',
  styleUrl: './updateproject.component.css'
})
export class UpdateprojectComponent {


  projects: any[] = [];
  project = {
    _id: '',
    pname: '',
    plink: '',
    descrbtion: ''
  };

  ngOnInit() {
    this.loadProjects();
  }

  async loadProjects() {
    try {
      const res = await fetch('http://localhost:8000/project');
      const data = await res.json();
      this.projects = data;
    } catch (err) {
      console.error(' Error loading projects:', err);
    }
  }

  onCardClick(item: any) {
    this.project = { ...item };
  }

  async onUpdate() {
    try {
      const res = await fetch('http://localhost:8000/project', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.project)
      });

      const result = await res.json();
      console.log(' Updated:', result);
      this.loadProjects();
    } catch (err) {
      console.error(' Error updating project:', err);
    }
  }
}


