import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssAlignmentExaplesComponent } from './css-alignment-exaples.component';

describe('CssAlignmentExaplesComponent', () => {
  let component: CssAlignmentExaplesComponent;
  let fixture: ComponentFixture<CssAlignmentExaplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssAlignmentExaplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssAlignmentExaplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
