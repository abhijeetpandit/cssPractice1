import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatStylePageComponent } from './float-style-page.component';

describe('FloatStylePageComponent', () => {
  let component: FloatStylePageComponent;
  let fixture: ComponentFixture<FloatStylePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatStylePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatStylePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
