import {Component} from '@angular/core';
import {DestinationsDataService} from "../../services/destinations-data.service";
import {faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  protected searchIcon = faSearch;
  protected searchTerm: string = '';

  constructor(private destinationsDataService: DestinationsDataService) {}

  protected onSearchTermChange() {
    if (this.searchTerm.length !== 1) {
      this.destinationsDataService.toggleSearch(this.searchTerm);
    }
  }

}
