import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniThumbnailComponent } from './mini-thumbnail.component';

describe('ThumbnailComponent', () => {
  let component: MiniThumbnailComponent;
  let fixture: ComponentFixture<MiniThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniThumbnailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
