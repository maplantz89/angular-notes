import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //needed for ngModel

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { NestedComponent } from './nested/nested.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { NotesComponent } from './notes/notes.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { OnlyOddComponent } from './only-odd/only-odd.component';
import { BasicHighlightDirective } from './derective-practice/basic-highlight.directive';
import { BetterHighlightDirective } from './derective-practice/better-highlight.directive';
import { UnlessDirective } from './derective-practice/unless.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountService } from './services/account.service';
import { LoggingService } from './services/logging.service';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { FormAssignmentComponent } from './form-assignment/form-assignment.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormAssignment2Component } from './form-assignment2/form-assignment2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    NestedComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    NotesComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    OnlyOddComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    HomeComponent,
    FormComponent,
    FormAssignmentComponent,
    FormReactiveComponent,
    FormAssignment2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule //for reactive you don't need the FormsModule import just this one
  ],
  providers: [AccountService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
