import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactForm } from '../courses/models/contactForm';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  focus: any;
  focus1: any;

  contactForm : ContactForm =new ContactForm('','','');

  async loadContact(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.contactForm= new ContactForm('','','');
  }

  onSubmit(contactFormulaire: NgForm){
    console.log(contactFormulaire.value);
    console.log(contactFormulaire.value['password']);
    alert("Your message is submited succefully. Thanks for your feedback");
  }

  constructor() { }

  ngOnInit(): void {
    this.loadContact();
  }

}
