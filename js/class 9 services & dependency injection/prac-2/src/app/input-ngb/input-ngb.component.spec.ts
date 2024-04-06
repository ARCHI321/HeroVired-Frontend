import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNGBComponent } from './input-ngb.component';

describe('InputNGBComponent', () => {
  let component: InputNGBComponent;
  let fixture: ComponentFixture<InputNGBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputNGBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputNGBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
