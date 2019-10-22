import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssCountersComponent } from './css-counters.component';

describe('CssCountersComponent', () => {
  let component: CssCountersComponent;
  let fixture: ComponentFixture<CssCountersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssCountersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
