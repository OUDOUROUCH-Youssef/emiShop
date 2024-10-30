import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DatailsComponent } from './datails/datails.component';

export const routes: Routes = [
    {path:'', component:ProductComponent},
    {path:'details', component:DatailsComponent}
];
