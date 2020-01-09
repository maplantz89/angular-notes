import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-only-odd',
  templateUrl: './only-odd.component.html',
  styleUrls: ['./only-odd.component.css']
})
export class OnlyOddComponent implements OnInit {
  // OnlyOdd
  // numbers = [1, 2, 3, 4, 5];
  onlyOddNumbers = [1, 3, 5];
  onlyEvenNumbers = [2, 4];
  onlyOdd = false;
  value = 10; 

  constructor() { }

  ngOnInit() {
  }

}
