import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {StatsService} from "../stats.service";
import {StatsPeriodItem} from "../data/stats";
import {EntityService} from "../entity.service";
import {EntityShort} from "../data/entities";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [
    StatsService,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ContentComponent implements OnInit {
  public stats: StatsPeriodItem[] = [];
  public entities: EntityShort[] = [];

  public selectedEntity: EntityShort|null;

  constructor(
    private readonly statsService: StatsService,
    private readonly entityService: EntityService,
  ) {
    this.selectedEntity = null;
  }

  public onSelect(entity: EntityShort): void {
    if (entity.id === this.selectedEntity?.id) {
      return;
    }

    this.selectedEntity = entity;

    this.stats = [];
    this.statsService.stats(entity.id)
      .subscribe(
        (items: StatsPeriodItem[]) => {
          this.stats = items;
        }
      );
  }

  public ngOnInit(): void {
    this.entityService.getAllArticles()
      .subscribe(
        (items: EntityShort[]) => {
          this.entities = items;
        }
      );
  }
}
