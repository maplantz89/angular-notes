import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() timerFired = new EventEmitter<number>();
  timer;
  num: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame(){
    this.timer = setInterval(()=> {
      this.timerFired.emit(this.num + 1)
      this.num++;
    }, 1000)
  }
  
  onStopGame(){
    clearInterval(this.timer);
  }

}
