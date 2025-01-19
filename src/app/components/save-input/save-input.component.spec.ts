import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveInputComponent } from './save-input.component';

describe('SaveInputComponent', () => {
  let component: SaveInputComponent;
  let fixture: ComponentFixture<SaveInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
