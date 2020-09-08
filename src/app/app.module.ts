
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { PageComponent } from './pages/page/page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    PageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
