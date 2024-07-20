import { Component } from '@angular/core';
import { MenuOption } from "../../../constants";
import { DestinationsDataService } from "../../services/destinations-data.service";

@Component({
  selector: 'app-menu',
  templateUrl: './main-menu.component.html'
})
export class MainMenuComponent {
  public readonly MenuOption = MenuOption;

  constructor(public destinationsDataService: DestinationsDataService) {
  }

  public setActiveTab(option: MenuOption) {
    this.destinationsDataService.activeTab = option;
  }

}
