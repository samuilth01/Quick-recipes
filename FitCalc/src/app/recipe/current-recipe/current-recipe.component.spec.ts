import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRecipeComponent } from './current-recipe.component';

describe('CurrentRecipeComponent', () => {
  let component: CurrentRecipeComponent;
  let fixture: ComponentFixture<CurrentRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentRecipeComponent]
    });
    fixture = TestBed.createComponent(CurrentRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
