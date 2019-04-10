import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StargateComponent } from './stargate/stargate.component';
import { HightscoreComponent } from './hightscore/hightscore.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestComponent } from './quest/quest.component';

@NgModule({
  declarations: [
    AppComponent,
    StargateComponent,
    HightscoreComponent,
    QuizComponent,
    QuestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
