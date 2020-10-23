import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'tickets', component: TicketsComponent },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
