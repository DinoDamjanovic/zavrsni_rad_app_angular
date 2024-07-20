import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DestinationData, DestinationsDataService } from "../../services/destinations-data.service";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
})
export class DestinationListComponent implements OnInit, OnDestroy {
  @Input() onlyFavorites!: boolean;
  public destinations!: DestinationData[];
  private destroy$ = new Subject<void>();

  constructor(private destinationsDataService: DestinationsDataService) {
  }

  ngOnInit() {
    this.destinationsDataService.activeDestinationData$
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.destinations = data;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
