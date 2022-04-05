import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DisplayComponent } from './calculator/display/display.component';
import { GamereditorComponent } from './calculator/gamerturnselector/gamereditor/gamereditor.component';
import { GamerSelectorComponent } from './calculator/gamerturnselector/gamerselector.component';
import { ResultsOpenerComponent } from './calculator/gamerturnselector/resultsopener.component';
import { TurnSelectorComponent } from './calculator/gamerturnselector/turnselector.component';
import { KeyComponent } from './calculator/keyboard/key/key.component';
import { KeyboardComponent } from './calculator/keyboard/keyboard.component';
import { MakipopupComponent } from './calculator/makipopup/makipopup.component';
import { ResultComponent } from './calculator/result.component';
import { GamersService } from './service/gamers.service';
import { HonourService } from './service/honour.service';
import { HonourBookingService } from './service/honourbooking.service';
import { TurnsService } from './service/turns.service';

@NgModule({
  declarations: [
    AppComponent,  CalculatorComponent, GamerSelectorComponent, TurnSelectorComponent, ResultsOpenerComponent, KeyComponent, KeyboardComponent, ResultComponent, MakipopupComponent, DisplayComponent, GamereditorComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ GamersService, HonourService, TurnsService, HonourBookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
