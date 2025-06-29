import { Component } from '@angular/core';
import { DashboardHeadrComponent } from "../dashboard-headr/dashboard-headr.component";
import { FooterComponent } from "../../user/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  imports: [DashboardHeadrComponent, FooterComponent,RouterOutlet],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {

}
