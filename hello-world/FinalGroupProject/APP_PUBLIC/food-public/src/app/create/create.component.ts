import { Component, OnInit,Input } from '@angular/core';
import { Food } from '../food';
import { FoodDataService } from '../food-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[FoodDataService]
})
export class CreateComponent implements OnInit {
foodForm:FormGroup;
  // public newFood:Food = {
  //   name:'',
  //   type:'',
  //   releaseDate:'',
  //   cookName:'',
  //   rating:'',
  //   _id:''
  // };

  constructor(private foodDataService:FoodDataService) { }

  ngOnInit() {
    this.foodForm = new FormGroup({
      name: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z\\s]+')
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
        Validators.pattern('[A-Za-z0-9, . ]+')
      ])),
      ingredients:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('[A-Za-z0-9, . ]+')
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
  public createNewFood() :void {
    this.foodDataService.createFood(this.foodForm.value);
    alert("Your Recipe has been stored in our Website");
    window.location.href="/home";
  }
  

}
