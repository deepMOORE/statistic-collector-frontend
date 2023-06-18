import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {StatsService} from "../stats.service";
import {StatsPeriodItem} from "../data/stats";
import {EntityService} from "../entity.service";
import {EntityShort, StatPeriod} from "../data/entities";
import {addMonths, addYears} from "date-fns";

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

  public statPeriod: StatPeriod = StatPeriod.Last3Month;

  public StatPeriod = StatPeriod;

  constructor(
    private readonly statsService: StatsService,
    private readonly entityService: EntityService,
  ) {
    this.selectedEntity = null;
  }

  public onSelectPeriod(statPeriod: StatPeriod): void {
    if (statPeriod === this.statPeriod) {
      return;
    }

    this.statPeriod = statPeriod;

    this.stats = [];

    if (this.selectedEntity === null) {
      return;
    }

    let end = new Date();

    let start = this.parseDateStart(end);

    this.statsService.stats(this.selectedEntity.id, start, end)
      .subscribe(
        (items: StatsPeriodItem[]) => {
          this.stats = items;
        }
      );
  }

  public onSelect(entity: EntityShort): void {
    if (entity.id === this.selectedEntity?.id) {
      return;
    }

    let end = new Date();

    let start = this.parseDateStart(end);

    this.selectedEntity = entity;

    this.stats = [];
    this.statsService.stats(entity.id, start, end)
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

  private parseDateStart(end: Date): Date {
    if (this.statPeriod === StatPeriod.Last3Month) {
      return addMonths(end, -3);
    }

    if (this.statPeriod === StatPeriod.Last6Month) {
      return addMonths(end, -6);
    }

    if (this.statPeriod === StatPeriod.LastYear) {
      return addYears(end, -1);
    }

    throw new Error('undefined period');
  }
}
