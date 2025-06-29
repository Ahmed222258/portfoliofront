
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  url = 'http://localhost:8000/user';
  u: any = null; // store the first user

  async ngOnInit() {
    await this.getUser();
  }

  async getUser() {
    try {
      const res = await fetch(this.url);
      const users = await res.json();
      console.log(users[0]); // confirm first user
      this.u = users[0]; // assign first user only
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
}
