import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [FormsModule,CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
// education = {
//     place: '',
//     sdate: '',
//     edate: '',
//     grade:'',

//   };
//   async submitForm() {
//     try {
//       const response = await fetch('http://localhost:8000/education', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(this.education)
//       });

//       if (!response.ok) {
//         const error = await response.json();
//         alert('Server Error: ' + (error.message || 'Unknown error'));
//         return;
//       }

//       const result = await response.json();
//       alert('education added successfully!');
//       console.log(result);
//     } catch (err) {
//       console.error('Fetch error:', err);
//       alert('Network error');
//     }
//   }

educations: any[] = [];
  education = {
    _id: '',
    place: '',
    sdate: '',
    edate: '',
    grade: null
  };

  ngOnInit() {
    this.loadEducations();
  }

  async loadEducations() {
    try {
      const res = await fetch('http://localhost:8000/education');
      const data = await res.json();
      this.educations = data;
    } catch (err) {
      console.error('❌ Error loading educations:', err);
    }
  }

  onCardClick(item: any) {
    this.education = { ...item };
  }

  async onUpdate() {
    try {
      const res = await fetch('http://localhost:8000/education', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.education)
      });

      const result = await res.json();
      console.log('✅ Updated:', result);

      // Optionally reload the list
      this.loadEducations();
    } catch (err) {
      console.error('❌ Error updating education:', err);
    }
  }
}


