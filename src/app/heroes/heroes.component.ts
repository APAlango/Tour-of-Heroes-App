import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero = {
    id: 1,
    name: 'WindStorm',
  };
  heroes: Hero[] = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  adjustFieldSize(): void {
    let field = document.getElementById("name-input-field");
    // @ts-ignore
    const width = field.value.length + 14;
    // window.alert(width);
    field.style.width = width + "ch";
  }
}