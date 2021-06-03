import { Component, OnInit, ViewChild } from '@angular/core';
import { StoreService } from '../store.service';
import { TileObj } from '../tileobj';
@Component({
  selector: 'tictac-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  tiles: Array<TileObj> = [];
  store: StoreService;
  @ViewChild('tictac') tictac: any;

  clickedByPlayer(event: any, tile: TileObj) {
    event.preventDefault();
    console.log(tile);
    if (!this.store.winFlag) {
      console.log('haha', event.target.style);
      this.store.played(tile.idx);
    }
  }

  displayWon() {
    if (this.store.winFlag) {
      setTimeout(() => {
        alert(this.store.chance + ' is the winner !');
      }, 200);
    }
  }

  resetTiles() {
    // this.someoneWon = false;
    for (let i = 0; i < 9; i++) {
      this.tiles[i].resetTile();
    }
  }
  constructor(store: StoreService) {
    this.store = store;
    // this.someoneWon = false;
    for (let i = 1; i < 10; i++) {
      this.tiles.push(new TileObj(i));
    }
  }

  ngOnInit() {}
}
