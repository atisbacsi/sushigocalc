import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakipopupComponent } from './makipopup.component';

describe('MakipopupComponent', () => {
  let component: MakipopupComponent;
  let fixture: ComponentFixture<MakipopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakipopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakipopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
