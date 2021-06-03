import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from '../store.service';
import { TileObj } from '../tileobj';
@Component({
  selector: 'tictac-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() load: TileObj;

  blue: StoreService;
  constructor(blue: StoreService) {
    console.log(this.load);
    this.blue = blue;
  }

  ngOnInit(): void {}
}
