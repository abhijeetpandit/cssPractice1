import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalNavigationDemoComponent } from './vertical-navigation-demo.component';

describe('VerticalNavigationDemoComponent', () => {
  let component: VerticalNavigationDemoComponent;
  let fixture: ComponentFixture<VerticalNavigationDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalNavigationDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalNavigationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
