import { Component, OnInit } from '@angular/core';
import { topHeroes } from 'src/topheroes';
import { HeroService } from '../hero.service';
import { Hero } from 'src/hero';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  searchText = '';
  filteredItems: { name: string; id: number }[] = [];

  constructor(public heroService: HeroService) {}




}
