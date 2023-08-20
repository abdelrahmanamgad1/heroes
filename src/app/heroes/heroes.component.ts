import { Component } from '@angular/core';
import { topHeroes } from 'src/topheroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  arr = topHeroes;
  inputName = '';
  
  constructor(public heroService: HeroService){}

  addHero() {
    const lastObject = this.arr[this.arr.length - 1];
    const lastId = lastObject.id + 1;
    const newHero = { id: lastId, name: this.inputName };
    this.arr.push(newHero);
  }
  removeHero(heroId: number) {
    this.arr = this.arr.filter((obj) => obj.id !== heroId);
  }
}
