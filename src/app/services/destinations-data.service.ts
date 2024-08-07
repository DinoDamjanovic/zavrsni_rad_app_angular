import { Injectable } from '@angular/core';
import { MenuOption } from "../../constants";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../environments/environment";

export interface DestinationData {
  id: number;
  name: string;
  imageUrl: string;
  isFavorite: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DestinationsDataService {
  private readonly MountainLake: string = environment.assetBasePath + "mountain_lake.png";
  private readonly HiddenForest: string = environment.assetBasePath + "hidden_forest.png";
  private readonly LakeRoad: string = environment.assetBasePath + "lake_road.png";
  private readonly ForestfallHike: string = environment.assetBasePath + "forestfall_hike.png";
  private readonly AzureBeachHideout: string = environment.assetBasePath + "azure_beach_hideout.png";
  private readonly MountainRetreat: string = environment.assetBasePath + "mountain_retreat.png";
  private readonly TropicalParadise: string = environment.assetBasePath + "tropical_paradise.png";
  private readonly AutumnDream: string = environment.assetBasePath + "autumn_dream.png";
  private readonly SunnyMeadow: string = environment.assetBasePath + "sunny_meadow.png";
  private readonly SunsetDocks: string = environment.assetBasePath + "sunset_docks.png";
  private readonly LakeOfSilence: string = environment.assetBasePath + "lake_of_silence.png";
  private readonly SpringField: string = environment.assetBasePath + "spring_field.png";

  public activeTab: MenuOption = MenuOption.DESTINATIONS;
  private isSearchActive: boolean = false;

  private allDestinationData: DestinationData[] = [
    {
      id: 1,
      name: 'Mountain Lake',
      imageUrl: this.MountainLake,
      isFavorite: false
    },
    {
      id: 2,
      name: 'Hidden Forest',
      imageUrl: this.HiddenForest,
      isFavorite: false
    },
    {
      id: 3,
      name: 'Lake Road',
      imageUrl: this.LakeRoad,
      isFavorite: false
    },
    {
      id: 4,
      name: 'Forestfall hike',
      imageUrl: this.ForestfallHike,
      isFavorite: false
    },
    {
      id: 5,
      name: 'Azure Beach Hideout',
      imageUrl: this.AzureBeachHideout,
      isFavorite: false
    },
    {
      id: 6,
      name: 'Mountain Retreat',
      imageUrl: this.MountainRetreat,
      isFavorite: false
    },
    {
      id: 7,
      name: 'Tropical Paradise',
      imageUrl: this.TropicalParadise,
      isFavorite: false
    },
    {
      id: 8,
      name: 'Autumn Dream',
      imageUrl: this.AutumnDream,
      isFavorite: false
    },
    {
      id: 9,
      name: 'Sunny Meadow',
      imageUrl: this.SunnyMeadow,
      isFavorite: false
    },
    {
      id: 10,
      name: 'Sunset Docks',
      imageUrl: this.SunsetDocks,
      isFavorite: false
    },
    {
      id: 11,
      name: 'Lake of Silence',
      imageUrl: this.LakeOfSilence,
      isFavorite: false
    },
    {
      id: 12,
      name: 'Spring Field',
      imageUrl: this.SpringField,
      isFavorite: false
    }
  ];
  private _activeDestinationDataSubject = new BehaviorSubject<DestinationData[]>(this.allDestinationData);

  get activeDestinationDataSubject(): BehaviorSubject<DestinationData[]> {
    return this._activeDestinationDataSubject;
  }

  get activeDestinationData$(): Observable<DestinationData[]> {
    return this._activeDestinationDataSubject.asObservable();
  }

  toggleFavorite(id: number): void {
    const updatedDestinations = this.allDestinationData.map(destination => {
      if (destination.id === id) {
        return { ...destination, isFavorite: !destination.isFavorite };
      }
      return destination;
    });

    this.allDestinationData = updatedDestinations;

    if (this.isSearchActive) {
      const idSet = new Set(this._activeDestinationDataSubject.getValue().map(destination => destination.id));
      this._activeDestinationDataSubject.next(updatedDestinations.filter(destination => idSet.has(destination.id)));
    } else {
      this._activeDestinationDataSubject.next(updatedDestinations);
    }
  }

  toggleSearch(searchTerm: string): void {
    if (searchTerm.length === 0) {
      this.isSearchActive = false;
      this._activeDestinationDataSubject.next(this.allDestinationData);
      return;
    }

    const lowerCasedSearchTerm = searchTerm.toLowerCase();

    const updatedDestinations = this.allDestinationData.filter(destination => {
      return destination.name.toLowerCase().includes(lowerCasedSearchTerm);
    });

    this.isSearchActive = true;
    this._activeDestinationDataSubject.next(updatedDestinations);
  }

}
