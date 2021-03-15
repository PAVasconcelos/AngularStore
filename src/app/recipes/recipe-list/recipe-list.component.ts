import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pizza Vegan', 'Vegan pizza is awesome! it really taste like weeds, come taste it!', 
               'https://www.acouplecooks.com/wp-content/uploads/2019/11/Recipes-Header-1-800x400.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}