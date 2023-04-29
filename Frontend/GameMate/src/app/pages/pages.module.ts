import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PagesRoutingModule } from './pages-routing.module';
import { TerminosycondicinonesComponent } from './terminosycondicinones/terminosycondicinones.component';


@NgModule({
  declarations: [DashboardIndexComponent, LoginComponent, RegistroComponent, TerminosycondicinonesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ], 
  exports: [DashboardIndexComponent, LoginComponent, RegistroComponent]
})
export class PagesModule { }
