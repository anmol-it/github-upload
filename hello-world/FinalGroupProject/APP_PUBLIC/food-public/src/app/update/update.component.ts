import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodDataService } from '../food-service.service';
import { ActivatedRoute,Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import{ FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 panel1:String;
  foodForm:FormGroup; 
  myVar:String; 

  
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
    private foodDataService:FoodDataService,
    private route:ActivatedRoute
    ) {} 
    food:Food;

  ngOnInit() {
  
    this.foodService.getFoods()
    .then((foods: Food[]) => {
      this.foods = foods.map(food => {
        return food;
      });

    });
    this.foodForm = new FormGroup({
      name: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z\\s]+') //a-zA-Z][a-zA-Z\\s]+
      ])),
      type:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('[A-Za-z]+')
      ])),
      releaseDate:new FormControl(''),
      cookName:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('[A-Za-z0-9\\s]+')
      ])),
      rating:new FormControl('',this.ratingValidator), //[^A-Za-z0-9]+
      description:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('[A-Za-z0-9,. ]+')
      ])),
      ingredients:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('[A-Za-z0-9, ]+')
      ])),
      
      _id:new FormControl('')
    })
  }

  ratingValidator(control:FormControl) {

    if(control.value.trim().length ===0) {
      return null;
    }
    const rating = parseInt(control.value,10);
    const minRating=1;
    const maxRating=5;
    if(rating >= minRating && rating <= maxRating) {
      return null;

    }else  {
      return{ rating:true};
    }
  }
  


public updateNewFood(foodId) :void {
    
  this.foodDataService.updateFood(this.foodForm.value, foodId);
  alert("Data Successfully Updated.");
  window.location.href="/home";


}

pageContent = {
  header: {
    title:'',
    body:'',
   
  }
};


toggle(food, foodName) {
  
  this.foodForm.patchValue({
    name:food.name,
    type: food.type,
    releaseDate: food.releaseDate,
    cookName: food.cookName,
    rating:food.rating,
    ingredients:food.ingredients,
    description:food.description
  })
  // var name:string=food;
  // let panel1 =document.querySelector("[id="+CSS.escape(name)+"]").id;
  // let abc =document.querySelector("[id="+CSS.escape(name)+"]");
  this.panel1=foodName;
 

  
//  if(food===panel1)
//   {
//     abc.setAttribute("style","visibility:visible;height:500px; position:absolute; top:250px; left 600px");

    
//   }
  
}
}
