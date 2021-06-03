import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardComponent } from './board/board.component';
import { TileComponent } from './tile/tile.component';
import { StoreService } from './store.service';

@NgModule({
  imports: [CommonModule],
  declarations: [BoardComponent, TileComponent],
  exports: [BoardComponent],
  providers: [StoreService]
})
export class TictacModule {}
