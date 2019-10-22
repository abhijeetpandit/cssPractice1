import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteExampleOneComponent } from './site-example-one.component';

describe('SiteExampleOneComponent', () => {
  let component: SiteExampleOneComponent;
  let fixture: ComponentFixture<SiteExampleOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteExampleOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteExampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
