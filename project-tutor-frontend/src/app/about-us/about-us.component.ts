import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  focus: any;
  focus1: any;
  test : Date = new Date();
  constructor() { }
  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
}
  ngOnInit(): void {
  }

}
