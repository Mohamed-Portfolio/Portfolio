import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  showEducation : boolean =true
  showProjects :boolean=true

projects = [
  {name:"project 1" , description : "hellooo"},
  {name:"project 2" , description : "hellooo World"},
  {name:"project 3" , description : "hellooo World benjamin"},
]


}

