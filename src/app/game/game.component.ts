import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  sourceArray!:number[][];
  winORlose:string ='';
  levelUp:number = 3;
  score:number = 0;
  @ViewChildren('btn')cells!:QueryList<any>;
  constructor() { }
  ngOnInit(): void {
    this.sourceArray = this.create2DArray(this.levelUp)
  }

  create2DArray(n:number):number[][] {
    const arr =  Array.from({length : n } , (_, i) => Array.from({length : n} , (_ ,j) => +(i < Math.floor(n / 2) || (i === Math.floor(n/2) && j >= Math.floor(n / 2)))));
    const randomIndex = Array.from({ length: n * n }, (_, i) => [Math.floor(i / n), i % n]).sort(() => Math.random() - 0.5);
    return Array.from({length : n } , (_, i ) => randomIndex.slice(i * n ,i * n + n).map(([x , y]) => arr[x][y]));
  }

  nextLevel(n: number){
    this.sourceArray = this.create2DArray(n);
    this.winORlose = '';
    this.score = 0;
    this.levelUp = n
  }

  cellCliking(event : MouseEvent,n: number , i: number, j: number){
    (((this.cells['_results'][i ? i * this.levelUp + j : i+j] as ElementRef).nativeElement as HTMLButtonElement).firstChild as HTMLLabelElement).classList.remove('labelShow');
    ((this.cells['_results'][i ? i * this.levelUp + j : i+j] as ElementRef).nativeElement as HTMLButtonElement).classList.add('btndisable')
    if(n === 0){
      this.winORlose = 'lose'
      this.cells['_results'].forEach((element : ElementRef) => element.nativeElement.classList.add('btndisable'))
      return
    }
    this.score++;
    let numberOfOnces:number = 0;
    this.sourceArray.forEach(subArr => subArr.forEach(num => num ? numberOfOnces++ : ''));
    if(numberOfOnces === this.score){
      this.winORlose = 'win'
      this.cells['_results'].forEach((element : ElementRef) => element.nativeElement.classList.add('btndisable'))
    }
  }

}
