import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSubNameComponent } from './show-sub-name.component';

describe('ShowSubNameComponent', () => {
  let component: ShowSubNameComponent;
  let fixture: ComponentFixture<ShowSubNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowSubNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowSubNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
