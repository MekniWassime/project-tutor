import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VerifyTokenForm } from '../courses/models/verifyTokenForm';

@Component({
  selector: 'app-verify-token',
  templateUrl: './verify-token.component.html',
  styleUrls: ['./verify-token.component.css']
})
export class VerifyTokenComponent implements OnInit {
  focus: any;
  focus1 : any;
  tokenToVerify: VerifyTokenForm = new VerifyTokenForm('');
  constructor() { }


  onSubmit(verifyTokenFormulaire: NgForm){
    console.log(verifyTokenFormulaire.value);
  }
  ngOnInit(): void {

  }

}
