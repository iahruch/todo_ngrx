import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {TodoEffects} from "./store/effects";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {reducer } from "./store/reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([TodoEffects]),
    StoreModule.forRoot({todos: reducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
