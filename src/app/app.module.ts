import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TictacModule } from '../tictac/tictac.module';

@NgModule({
  imports: [BrowserModule, FormsModule, TictacModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
