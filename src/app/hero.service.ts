import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Hero } from 'src/hero';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private api = 'https://64ddfeff825d19d9bfb1d6d6.mockapi.io/heros';
  protected _heroes: Hero[] = [];
  protected isCalled: boolean = true;

  constructor(private http: HttpClient) {}

  set heroes(heroes: Hero[]) {
    this._heroes = heroes;
  }
  get heroes() {
    return this._heroes;
  }

  getAllHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.api).pipe(
      tap((heroes) => {
        this._heroes = heroes;
        this.isCalled = false;
      })
    );
  }

  getHeroById(id: number): Observable<Hero> {
    const url = `${this.api}/${id}`;
    return this.http.get<Hero>(url);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.api, hero);
  }

  updateHero(id: number, hero: Hero): Observable<Hero> {
    const url = `${this.api}/${id}`;
    return this.http.put<Hero>(url, hero);
  }

  deleteHero(id: string): Observable<any> {
    const url = `${this.api}/${id}`;
    return this.http.delete(url);
  }
}
