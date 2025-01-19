import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailDetailsComponent } from './thumbnail-details.component';

describe('ThumbnailDetailsComponent', () => {
  let component: ThumbnailDetailsComponent;
  let fixture: ComponentFixture<ThumbnailDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThumbnailDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
