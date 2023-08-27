import {Component} from '@angular/core';
import {MenuOption} from "../../../constants";
import {DestinationsDataService} from "../../services/destinations-data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  protected readonly MenuOption = MenuOption;

  constructor(protected destinationsDataService: DestinationsDataService) {
  }

}
