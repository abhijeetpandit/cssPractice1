import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssTransformsOneComponent } from './css-transforms-one.component';

describe('CssTransformsOneComponent', () => {
  let component: CssTransformsOneComponent;
  let fixture: ComponentFixture<CssTransformsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssTransformsOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssTransformsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
