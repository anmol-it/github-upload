import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodDataService } from '../food-service.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers:[FoodDataService]
})
export class DeleteComponent implements OnInit {
  foods:Food[];
  public newFood:Food = {
    name:'',
    type:'',
    releaseDate:'',
    cookName:'',
    rating:'',
    _id:'',
    ingredients:'',
    description:''
   
    
  };

  

 
  constructor(private foodService:FoodDataService,
    private foodDataService:FoodDataService) { }

  
  ngOnInit() {
    this.foodService.getFoods()
    .then((foods: Food[]) => {
      this.foods = foods.map(food => {
        return food;
      });
    });
    
  }


  

  public deleteNewFood(foodId:String) :void {
    
    this.foodDataService.deleteFood(foodId);
    alert("Recipe deleted Successfully");
    window.location.href="/home";
  

  }
}
