import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeroesComponent} from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    /**
     * @uijar HeroesComponent
     */
    TestBed.configureTestingModule({
      declarations: [HeroesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /** @uijarexample Example For Init */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
