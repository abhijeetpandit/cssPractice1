import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownTwoComponent } from './dropdown-two.component';

describe('DropdownTwoComponent', () => {
  let component: DropdownTwoComponent;
  let fixture: ComponentFixture<DropdownTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
