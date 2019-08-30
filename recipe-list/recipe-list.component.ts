import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Ice cream', 'How to make a banana and chocolate icecream', 'https://sugarspunrun.com/wp-content/uploads/2018/07/Ice-Cream-Cone-Cupcakes-Recipe-1-of-1-6.jpg'), 
    new Recipe('Lasagna', 'Typical Italian lasagna', 'https://pespdotcom.files.wordpress.com/2019/02/gettyimages-535851351.jpg?w=2000' )
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
