import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { HotelComponent } from './pages/hotel/hotel.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hotel', component: HotelComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  

export class AppRoutingModule { }
