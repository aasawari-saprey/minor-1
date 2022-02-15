import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseFoodComponent } from './browse-food.component';

describe('BrowseFoodComponent', () => {
  let component: BrowseFoodComponent;
  let fixture: ComponentFixture<BrowseFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
