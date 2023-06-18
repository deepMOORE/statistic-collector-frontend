import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ApiResponse} from "./data/api.response";
import {unwrapApiResponse} from "./mapping/mapper";
import {EntityShort} from "./data/entities";

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  constructor(
    private readonly http: HttpClient
  ) {
  }

  public getAllArticles(): Observable<EntityShort[]> {
    return this.http.get<ApiResponse<EntityShort>>('http://127.0.0.1:8000/api/articles/all')
      .pipe(
        map(response => unwrapApiResponse<EntityShort, any>(
          response,
          dto => this._mapToEntityShort(dto)
        ))
      );
  }

  private _mapToEntityShort = (datum: any): EntityShort[] => {
    const result: EntityShort[] = [];

    for (const data of datum) {
      result.push({
        id: data.id,
        content: data.title,
      });
    }

    return result;
  }
}
