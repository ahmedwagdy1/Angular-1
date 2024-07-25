import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { PortfoioComponent } from '../portfoio/portfoio.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, RouterLink , RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  
}

// document.querySelectorAll('.links li').addEventLisner('click' , function{
  
// })

