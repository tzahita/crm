import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponentComponent } from './utils/header-component/header-component.component';
import { ParagraphUpperCasePipe } from './pipes/paragraph-upper-case.pipe';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomersComponent } from './components/customers/customers.component';
import { TableComponent } from './utils/table/table.component';
import { HttpTutComponent } from './components/http-tut/http-tut.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpTableComponent } from './utils/http-table/http-table.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    HeaderComponentComponent,
    ParagraphUpperCasePipe,
    ContactsComponent,
    PageNotFoundComponent,
    CustomersComponent,
    TableComponent,
    HttpTutComponent,
    HttpTableComponent,
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
