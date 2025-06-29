// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-contact',
//   imports: [],
//   templateUrl: './contact.component.html',
//   styleUrl: './contact.component.css'
// })
// export class ContactComponent {

// }

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
   templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 contact = {
    name: '',
    email: '',
    message: ''
  };

  async submitContactForm() {
    try {
      const response = await fetch('http://localhost:8000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.contact)
      });

      if (!response.ok) {
        const error = await response.json();
        alert('Server Error: ' + (error.message || 'Unknown error'));
        return;
      }

      const result = await response.json();
      alert('Message sent successfully!');
      console.log(result);

      // Optional: Reset form
      this.contact = { name: '', email: '', message: '' };
    } catch (err) {
      console.error('Fetch error:', err);
      alert('Network error');
    }
  }

}


