import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkCategoryCardComponent } from './drink-category-card.component';

describe('DrinkCategoryComponent', () => {
  let component: DrinkCategoryCardComponent;
  let fixture: ComponentFixture<DrinkCategoryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkCategoryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
