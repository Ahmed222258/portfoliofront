import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-scontact',
  imports: [CommonModule],
  templateUrl: './scontact.component.html',
  styleUrl: './scontact.component.css'
})
export class ScontactComponent {
contactUrl = 'http://localhost:8000/contact';
  messages: any[] = [];

  async ngOnInit() {
    await this.getMessages();
  }

  async getMessages() {
    try {
      const response = await fetch(this.contactUrl);
      const data = await response.json();
      this.messages = data;
    } catch (error) {
      console.error('Error fetching contact messages:', error);
    }
  }
}

