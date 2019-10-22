import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssAdvancedOneComponent } from './css-advanced-one.component';

describe('CssAdvancedOneComponent', () => {
  let component: CssAdvancedOneComponent;
  let fixture: ComponentFixture<CssAdvancedOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssAdvancedOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssAdvancedOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
