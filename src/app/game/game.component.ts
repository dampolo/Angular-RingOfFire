import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {
  pickCardAnimation = false;
// na string potem zmienic
  currentCard: any = '';
  game!: Game;

  constructor() {
  }

  ngOnInit(): void {
    this.newGame()

  }
  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard(){
    this.currentCard = this.game.stack.pop();
    this.pickCardAnimation = true;

  //   if(!this.pickCardAnimation) {
  //     let testCard = this.game.stack.pop();
  //     if(testCard != undefined){
  //       this.currentCard = testCard;
  //       console.log(this.currentCard);
  //     }
  //   }
  //   this.pickCardAnimation = true;    
  //   setTimeout(() => {
  //   this.pickCardAnimation = false;    
  //   }, 1000);
  }
}
