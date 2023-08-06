import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { CurrentRecipeComponent } from './current-recipe/current-recipe.component';
import { EditComponent } from './edit/edit.component';
import { RecipeRoutingModule } from './recipe-routing.module';


@NgModule({
  declarations: [
    AddRecipeComponent,
    CurrentRecipeComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule
  ],
  exports: [
    CurrentRecipeComponent
  ]
})
export class RecipeModule { }
