import { Component } from '@angular/core';
import { LazylodaingComponent } from '../lazylodaing/lazylodaing.component';


interface prodact {
  image : string,
  name : string,
  price: number,
  categ: string
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [LazylodaingComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {


  prodacts : prodact[] = [
    {image : "assets/images/cars1.jpeg" ,name : 'Lexus' , price : 20000000, categ : 'Good'},
    {image : "assets/images/cars2.jpeg" ,name : 'Aston Mary' , price : 30000000, categ : 'Very Good'},
    {image : "assets/images/cars3.jpeg" ,name : 'Mercedes' , price : 4000000, categ : 'Amazing'},
    {image : "assets/images/cars4.jpeg" ,name : 'Lamborghini' , price : 5000000, categ : 'Beautiful'}
   ]

}
