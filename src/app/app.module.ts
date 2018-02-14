import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from  '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PagesComponents } from './pages';
import { CompComponents } from './components';

import { AppServices } from './services';

@NgModule({
  declarations: [
    AppComponent,
    ...PagesComponents,
    ...CompComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AppServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
