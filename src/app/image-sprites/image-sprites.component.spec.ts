import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSpritesComponent } from './image-sprites.component';

describe('ImageSpritesComponent', () => {
  let component: ImageSpritesComponent;
  let fixture: ComponentFixture<ImageSpritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSpritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSpritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
