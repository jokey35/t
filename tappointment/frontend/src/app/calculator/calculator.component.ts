import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor(private calculatorService:CalculatorService) { }

  result : string = "";
  expr : string = "";

  ngOnInit(): void {
  }

  exprset(value:string):void{
    this.expr = this.expr.concat(value);
  }

  getmem():void{
    this.calculatorService.getmemory()
            .subscribe(expr => {this.expr = expr;});
  }

  setmem():void{
    this.calculatorService.setmemory(this.result);
  }

  calculate():void{
    try {
      this.result = eval(this.expr);
    }
    catch(e) {
      this.result = "Wrong expression";
    }
  }

  clear():void{
    if(this.expr != "")
      this.expr = "";
    else
      this.result = "";
  }

}
