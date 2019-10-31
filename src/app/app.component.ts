import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portofolio';

  SecondarySkills = [
    {
      name: 'Adobe Illustrator & Adobe Photoshop',
      value: '85',
      description:'Flexibility in tools and able to utilize them effectively'
    }
  ]
}
