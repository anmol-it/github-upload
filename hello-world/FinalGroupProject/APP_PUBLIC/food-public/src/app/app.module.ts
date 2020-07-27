import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HomeListComponent } from './home-list/home-list.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FrameworkComponent } from './framework/framework.component';
import {APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component: HomeComponent
      },
      {

        path:'home',
        component:HomepageComponent
      },
      
      {
      path:'create',
      component:CreateComponent
      },
      {
        path:'update',
        component:UpdateComponent
      },
      {
        path:'delete',
        component:DeleteComponent
      },
      {
        path :'food/:foodid',
        component: DetailsPageComponent
      },
      {
        path:'about',
        component: AboutComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    
    HomeListComponent,
    
    AboutComponent,
    
    HomepageComponent,
    
    HeaderComponent,
    
    FrameworkComponent,
    
    CreateComponent,
    
    DetailsPageComponent,
    
    UpdateComponent,
    
    DeleteComponent,
    
    HomeComponent
  ],
  providers: [{provide: APP_BASE_HREF,useValue: '/'}],
  bootstrap: [
    FrameworkComponent
  ]
})
export class AppModule {}