import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;
  constructor() { }

  ngOnInit(): void {
  }

  adjustFieldSize(): void {
    let field = document.getElementById("name-input-field");
    // @ts-ignore
    const width = field.value.length + 14;
    // window.alert(width);
    field.style.width = width + "ch";
  }

}
