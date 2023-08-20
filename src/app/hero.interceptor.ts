import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HeroService } from './hero.service';
import { Hero } from '../hero';

@Injectable()
export class HeroInterceptor implements HttpInterceptor {
  constructor(
    private router: Router, 
    private heroService: HeroService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const urlSegments = this.router.url.split('/');
    const idIndex = urlSegments.indexOf('hero') + 1;
    const id = urlSegments[idIndex];

    if (id) {
      return this.heroService.getHeroById(Number(id)).pipe(
        switchMap((updatedHero: Hero) => {
          const clonedRequest = request.clone({
            body: updatedHero,
          });
          return next.handle(clonedRequest);
        })
      );
    }

    return next.handle(request);
  }
}
