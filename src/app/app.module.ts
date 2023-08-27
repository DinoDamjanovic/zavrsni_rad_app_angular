import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {MainContainerComponent} from './components/main-container/main-container.component';
import {FooterComponent} from './components/footer/footer.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {DestinationsDataService} from "./services/destinations-data.service";
import {DestinationCardComponent} from './components/destination-card/destination-card.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {CommonModule} from "@angular/common";
import {DestinationListComponent} from './components/destination-list/destination-list.component';
import {SearchComponent} from './components/search/search.component';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { AboutMenuComponent } from './components/about-menu/about-menu.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    FooterComponent,
    MainMenuComponent,
    DestinationCardComponent,
    DestinationListComponent,
    SearchComponent,
    AboutComponent,
    AboutMenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [DestinationsDataService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }
}
