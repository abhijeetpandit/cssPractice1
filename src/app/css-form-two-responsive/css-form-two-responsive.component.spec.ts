import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssFormTwoResponsiveComponent } from './css-form-two-responsive.component';

describe('CssFormTwoResponsiveComponent', () => {
  let component: CssFormTwoResponsiveComponent;
  let fixture: ComponentFixture<CssFormTwoResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssFormTwoResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssFormTwoResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
