import { Component } from '@angular/core';
import { SubmitButtonComponent } from '../shared/submit-button/submit-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SubmitButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
