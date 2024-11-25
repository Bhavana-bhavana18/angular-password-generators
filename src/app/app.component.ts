import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  length = 0;
  password ='';
  includeLetters = false;
  includeNumber = false;
  includeSymbol = false;

  onButtonClick()
  {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if(this.includeLetters){
      validChars += letters;
    }

    if(this.includeNumber){
      validChars += numbers;
    }

    if(this.includeSymbol){
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i = 0; i < this.length; i++)
    {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  getPassword()
  {
    return this.password;
  }

  onChangeLength(event: Event):void
  {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const parseValue = parseInt(value,10)
    if(!isNaN(parseValue))
    {
      this.length = parseValue;
    }
    else
    {
      this.length = 0;
    }
  }

  onChangeUseLetter()
  {
    this.includeLetters=!this.includeLetters;
  }

  onChangeUseNumber()
  {
    this.includeNumber=!this.includeNumber;
  }

  onChangeUseSymbol()
  {
    this.includeSymbol=!this.includeSymbol;
  }

 
}
