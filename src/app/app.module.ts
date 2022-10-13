import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { InformationComponent } from './components/information/information.component';
import { FormEditComponent } from './components/form-edit/form-edit.component';
import { FormCreateComponent } from './components/form-create/form-create.component';
import { HomeComponent } from './components/home/home.component';

// services

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    InformationComponent,
    FormEditComponent,
    FormCreateComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
