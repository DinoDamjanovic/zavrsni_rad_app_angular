import { Component } from '@angular/core';
import { DestinationsDataService } from "../../services/destinations-data.service";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  public searchIcon = faSearch;
  public searchTerm: string = '';
  public searchPlaceholder: string = 'Search...';

  constructor(private destinationsDataService: DestinationsDataService) {
  }

  public onSearchTermChange() {
    if (this.searchTerm.length != 1) {
      this.destinationsDataService.toggleSearch(this.searchTerm);
    }
  }

}
