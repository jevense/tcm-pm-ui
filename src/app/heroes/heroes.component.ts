import { Component, OnInit } from '@angular/core';

/**
 * @group heroes
 * @component Heroes
 * @description
 * <div>It's possible use <b>html</b> in the description?OK?</div>
 */
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
