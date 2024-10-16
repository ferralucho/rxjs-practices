import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSearchModule } from './user-search/user-search.module'
import { UserSearchComponent } from './user-search/user-search.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UserSearchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
