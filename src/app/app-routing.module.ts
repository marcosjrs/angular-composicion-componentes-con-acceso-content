import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesPageComponent } from './pages/countries/countries.component';

const routes: Routes = [
  {path:'**', component:CountriesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
