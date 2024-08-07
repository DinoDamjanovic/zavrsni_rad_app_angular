import {Component, Input} from '@angular/core';
import {DestinationsDataService} from "../../services/destinations-data.service";
import {faHeart} from '@fortawesome/free-solid-svg-icons';

export interface DestinationCardProps {
  id: number;
  name: string;
  imageUrl: string;
  isFavorite: boolean;
}

@Component({
  selector: 'app-destination-card',
  templateUrl: './destination-card.component.html'
})
export class DestinationCardComponent {
  @Input() destination!: DestinationCardProps;
  public heartIcon = faHeart;

  constructor(private destinationsDataService: DestinationsDataService) {}

  public toggleFavorite() {
    this.destinationsDataService.toggleFavorite(this.destination.id);
  }

  public get heartColor(): string {
    const activeDestinationData = this.destinationsDataService.activeDestinationDataSubject.getValue();
    return activeDestinationData.find(destination => this.destination.id === destination.id)?.isFavorite ? 'red' : 'gray';
  }

}
