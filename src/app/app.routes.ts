import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfoioComponent } from './portfoio/portfoio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfondComponent } from './notfond/notfond.component';

    export const routes: Routes = [
        {path : '' , redirectTo : 'home', pathMatch : 'full'},
        {path : 'home' , component : HomeComponent},
        {path : 'about' , component : AboutComponent},
        {path : 'portfolio' , component : PortfoioComponent},
        {path : 'contact' , component : ContactComponent},
        {path : "**" , component : NotfondComponent}
    ];

