import { Component } from '@angular/core';
import { HeadrComponent } from "../../user/headr/headr.component";
import { FooterComponent } from "../../user/footer/footer.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout',
  imports: [HeadrComponent, FooterComponent,RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
