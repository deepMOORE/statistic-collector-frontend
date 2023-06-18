import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {StatsPeriodItem} from "./data/stats";
import {unwrapApiResponse} from "./mapping/mapper";
import {ApiResponse} from "./data/api.response";

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  constructor(
    private readonly http: HttpClient
  ) {
  }

  public stats(articleId: number, start: Date, end: Date): Observable<StatsPeriodItem[]> {
    const body = {
      articleId: articleId,
      start: start,
      end: end,
    };

    return this.http.post<ApiResponse<StatsPeriodItem>>('http://127.0.0.1:8000/api/stats', body)
      .pipe(
        map(response => unwrapApiResponse<StatsPeriodItem, any>(
          response,
            dto => this._mapToStatsPeriodItem(dto)
        ))
      );
  }

  private _mapToStatsPeriodItem = (datum: any): StatsPeriodItem[] => {
    const result: StatsPeriodItem[] = [];

    for (const data of datum) {
      result.push({
        value: data.value,
        period: new Date(data.period_date),
      });
    }

    return result;
  }
}
