import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  showEducation: boolean = true;
  showProjects: boolean = true;
  showAbout_Me: boolean = true;
  showSkills:boolean =true


  projects = [
    { name: "Ninja Hotel Reservation", description: "Website Application with React.js, Jwt, Cloudinary, Sequelize",Site: "https://github.com/mohamedmrabet/Hotel-Reservation"},
    { name: "The Museum", description: "Website Application created with React.js, Jwt, Cloudinary", Site: "https://github.com/mohamedmrabet/RBKTN-05-23-Mvp-Starter" },
    { name: "Hannibal-Market", description: "Website Application created with Next.js, TypeScript, and Tailwind",Site: "https://github.com/E-commerce-app-NextJS/firstRepo" },
    { name: "Codini", description: "Website Application created with Next.js, TypeScript,Cloudinary,Strapi and Tailwind",Site: "https://github.com/Codini-Porject/Codini" }
  ];

  openSite(url: string) {
    window.open(url, "_blank");
  }
}
