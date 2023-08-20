import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../../hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  hero!: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.heroService.getHeroById(Number(id)).subscribe((hero) => {
          this.hero = hero;
        });
      }
    });
  }

  editName(newName: string) {
    if (this.hero) {
      const updatedHero = { ...this.hero, name: newName };
      this.heroService.updateHero(this.hero.id, updatedHero).subscribe(updated => {
        this.hero = updated;
      });
    }
  }
}
