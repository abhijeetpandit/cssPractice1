import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssFormOneComponent } from './css-form-one.component';

describe('CssFormOneComponent', () => {
  let component: CssFormOneComponent;
  let fixture: ComponentFixture<CssFormOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssFormOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssFormOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
