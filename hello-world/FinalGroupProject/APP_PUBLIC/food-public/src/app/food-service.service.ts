import { Injectable } from '@angular/core';
import { Food } from './food';
import{ HttpClient, HttpErrorResponse,HttpClientJsonpModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodDataService {

private foodsUrl = 'http://localhost:3000/api/foods';

  constructor(private http:HttpClient) {

   }

   /*getFoods():Promise<void | Food[]> {
     return this.http.get(this.foodsUrl)
     .toPromise()
     .then(response => response.json() as Food[])
     .catch(this.handleError); */
     getFoods(): Promise<void | Food[]>{
      return this.http.get(this.foodsUrl)
                 .toPromise()
                 .then(response => response as Food[])
                 .catch(this.handleError);
   }

   getSingleFood(foodId:String): Promise<void | Food> {
     return this.http.get(this.foodsUrl + '/' + foodId)
                .toPromise()
                .then(response => response as Food)
                .catch(this.handleError);
   }

   createFood(newFood:Food) : Promise<void | Food> {
     return this.http.post(this.foodsUrl,newFood)
                .toPromise()
                .then(response => response as Food)
                .catch(this.handleError);
   }
   deleteFood(foodId:String) : Promise<void | Food> {
    return this.http.delete(this.foodsUrl+'/'+foodId)
               .toPromise()
               .then(response => response as Food)
               .catch(this.handleError);
               
  }

  updateFood(newFood:Food,foodId:String) : Promise<void | Food> {
    return this.http.put(this.foodsUrl+'/'+foodId,newFood)
               .toPromise()
               .then(response => response as Food)
               .catch(this.handleError);
               
  }

   

   private handleError(error:any) {
     console.log("error");
   }
   
}
