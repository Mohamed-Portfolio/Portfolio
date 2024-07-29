import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
Linkedin = `https://www.linkedin.com/in/mohamed-mrabet-939b56265/`
emailAddress=`mohamed10021995@gmail.com`

  constructor( public router : Router)
  {}
  onHome(){
   window.scrollTo({top:0,behavior:'smooth'})
    }
    onSkills(){
      const SkillSection = document.getElementById("skills-section")
      if(SkillSection) {
        SkillSection.scrollIntoView({behavior: "smooth", block: "start"})
      
      }
    }
    onAbout(){
      this.router.navigate(['./portfolio-website/about'])
    }
    onContact(){
      this.router.navigate(['./portfolio-website/contact']);
    }
  
}
