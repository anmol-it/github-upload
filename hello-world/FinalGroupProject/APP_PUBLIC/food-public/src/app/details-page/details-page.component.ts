import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { FoodDataService } from '../food-service.service';
import { Food } from '../food';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers: [FoodDataService]
})
export class DetailsPageComponent implements OnInit {

  constructor(
    private foodDataService:FoodDataService,
    private route:ActivatedRoute
  ) { }

  newFood:Food;

  ngOnInit() :void {
    this.route.params.pipe(
      switchMap((params:Params) => {
        return this.foodDataService.getSingleFood(params['foodid'])
      }))
      .subscribe((newFood:Food) => {
        this.newFood=newFood;
        this.pageContent.header.title=newFood.name;
        this.pageContent.header.body = "Details for selected food";
      });
    
  }

  pageContent = {
    header: {
      title:'',
      body:'',
     
    }
  };

}
