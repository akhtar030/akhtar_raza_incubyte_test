import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{

  title = 'Akhtar Raza Incubyte Test';
  userInput:string = '';
  output:any;

  constructor(){ }

  ngOnInit(): void {      
  }

  addValues(inputValue: string){
    if(inputValue != ''){
      let result = inputValue.replace(/[^0-9]/g, ''); //^-?\d*\.?\d+$
      let outputResult = String(result).split("").map((result) =>{
        return Number(result);
      })

      let sumOf = outputResult.reduce((el,sum) => el + sum);
      this.output = sumOf;
      console.log(sumOf);
      
    }
    else{
      alert("please provide some input");
    }
    // return inputValue
  }
}
