import { Component } from '@angular/core';
import {MenuOption} from "../../../constants";
import {DestinationsDataService} from "../../services/destinations-data.service";

@Component({
  selector: 'app-menu',
  templateUrl: './main-menu.component.html'
})
export class MainMenuComponent {
  protected readonly MenuOption = MenuOption;
  constructor(protected destinationsDataService: DestinationsDataService) {}

  protected setActiveTab(option: MenuOption) {
    this.destinationsDataService.activeTab = option;
  }

}
