import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { fromPromise } from 'rxjs/observable/fromPromise';

const CONFIG: any = {
  space: 'developer_bookshelf',
  accessToken: '0b7f6x59a0'
};

@Injectable()
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() {}

  getEntries(id: string, lang: string): Observable<Entry<any>> {
    return fromPromise(
      this.cdaClient.getEntries({
        content_type: id,
        locale: lang
      })
    ).pipe(
      map((response: any) => response.items),
      catchError((error: any) => of(error))
    );
  }
}
