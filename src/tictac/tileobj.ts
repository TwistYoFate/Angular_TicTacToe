export class TileObj {
  idx: number;
  color: string;
  clickedBy: 'X' | 'O' | '-';

  constructor(idx: number) {
    this.idx = idx;
    this.color = 'white';
    this.clickedBy = '-';
  }

  resetTile() {
    this.color = 'white';
    this.clickedBy = '-';
  }

  clicked(event: any, player: 'X' | 'O' | '-', winStatus: boolean) {
    if (this.clickedBy == '-' && !winStatus) {
      this.clickedBy = player;
      switch (player) {
        case '-':
          this.setColor(event, 'white');
          break;
        case 'X':
          this.setColor(event, 'lightgreen');
          break;
        case 'O':
          this.setColor(event, 'skyblue');
          break;
        default:
          break;
      }
      return this.idx;
    }
    return -1;
  }

  setColor(event: any, color: string) {
    console.log(event.target);
    event.target.style.backgroundColor = color;
  }
}
