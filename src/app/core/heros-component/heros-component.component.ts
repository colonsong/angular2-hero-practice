import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { Router }   from '@angular/router';
import {HeroService} from '../../hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heros-component.component.html',
  styleUrls: ['./heros-component.component.css'],
})

export class HerosComponentComponent implements OnInit {

  heroes : Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit(): void {

    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes=> this.heroes = heroes);
  }

  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }

 

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
