import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssShadowsComponent } from './css-shadows.component';

describe('CssShadowsComponent', () => {
  let component: CssShadowsComponent;
  let fixture: ComponentFixture<CssShadowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssShadowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssShadowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
