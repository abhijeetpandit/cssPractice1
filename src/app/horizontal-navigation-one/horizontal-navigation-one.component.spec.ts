import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalNavigationOneComponent } from './horizontal-navigation-one.component';

describe('HorizontalNavigationOneComponent', () => {
  let component: HorizontalNavigationOneComponent;
  let fixture: ComponentFixture<HorizontalNavigationOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalNavigationOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalNavigationOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
