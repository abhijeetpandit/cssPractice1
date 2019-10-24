import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionDemoComponent } from './transition-demo.component';

describe('TransitionDemoComponent', () => {
  let component: TransitionDemoComponent;
  let fixture: ComponentFixture<TransitionDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitionDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
