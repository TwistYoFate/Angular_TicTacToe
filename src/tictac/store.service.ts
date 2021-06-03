import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {
  //private properties
  private _winFlag: boolean; //get
  private _chance: 'X' | 'O'; //get
  private _xscore: number; //get
  private _oscore: number; //get
  private _xmoveStack: Array<number>; //get
  private _omoveStack: Array<number>; //get
  private _lookupPlayedTiles: Array<boolean> = []; //get
  private _wintable: Array<Array<number>> = [
    //none
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  //getters
  get winFlag() {
    return this._winFlag;
  }
  set winFlag(val: boolean) {
    this._winFlag = val;
  }
  get chance() {
    return this._chance;
  }
  get xscore() {
    return this._xscore;
  }
  get oscore() {
    return this._oscore;
  }
  get xmoveStack() {
    return this._xmoveStack;
  }
  get omoveStack() {
    return this._omoveStack;
  }

  //methods
  nextChance() {
    switch (this._chance) {
      case 'X':
        this._chance = 'O';
        break;
      case 'O':
        this._chance = 'X';
        break;
      default:
        break;
    }
  }
  // will return true if someone has won else false
  checkWin(player: 'X' | 'O') {
    if (!this.winFlag) {
      switch (player) {
        case 'X':
          for (let i = 0; i < 8; i++) {
            let c = 0;
            for (let j = 0; j < 3; j++) {
              if (this._xmoveStack.includes(this._wintable[i][j])) c++;
            }
            if (c == 3) {
              this._winFlag = true;
              this._xscore++;
              return true;
            }
          }
          return false;
        case 'O':
          for (let i = 0; i < 8; i++) {
            let c = 0;
            for (let j = 0; j < 3; j++) {
              if (this._omoveStack.includes(this._wintable[i][j])) c++;
            }
            if (c == 3) {
              this._winFlag = true;
              this._oscore++;
              return true;
            }
          }
          return false;
        default:
          return false;
      }
    }
  }

  //will return true if someone has won else false
  played(idx: number) {
    if (!this.winFlag) {
      if (this._lookupPlayedTiles[idx]) return false;
      this._lookupPlayedTiles[idx] = true;
      switch (this._chance) {
        case 'X':
          this._xmoveStack.push(idx);
          console.log('x', this._xmoveStack);
          if (this.checkWin('X')) {
            return true;
          }
          this.nextChance();
          return false;
        case 'O':
          this._omoveStack.push(idx);
          console.log('o', this._omoveStack);
          if (this.checkWin('O')) {
            return true;
          }
          this.nextChance();
          return false;
        default:
          return false;
      }
    }
  }

  newGame() {
    this._chance = 'X';
    this._xmoveStack = [];
    this._omoveStack = [];
    this._winFlag = false;
    for (let i = 0; i < 10; i++) {
      this._lookupPlayedTiles[i] = false;
    }
  }

  reset() {
    this._xscore = 0;
    this._oscore = 0;
    this.newGame();
  }

  constructor() {
    this._xscore = 0;
    this._oscore = 0;
    this._chance = 'X';
    this._xmoveStack = [];
    this._omoveStack = [];
    this._winFlag = false;
    for (let i = 0; i < 10; i++) {
      this._lookupPlayedTiles.push(false);
    }
  }
}
