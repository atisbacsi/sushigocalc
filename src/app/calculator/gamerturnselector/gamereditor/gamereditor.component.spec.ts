import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamereditorComponent } from './gamereditor.component';

describe('GamereditorComponent', () => {
  let component: GamereditorComponent;
  let fixture: ComponentFixture<GamereditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamereditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamereditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
