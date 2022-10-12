import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { InformationComponent } from './components/information/information.component';
import { FormEditComponent } from './components/form-edit/form-edit.component';
import { FormCreateComponent } from './components/form-create/form-create.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    InformationComponent,
    FormEditComponent,
    FormCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
