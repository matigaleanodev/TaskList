import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faTwitter = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

}
