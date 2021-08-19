import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pasta',
      'Pasta is a type of food',
      'https://i.ytimg.com/vi/JEeO_hagtVM/maxresdefault.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
