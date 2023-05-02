import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PagesRoutingModule } from './pages-routing.module';
import { TerminosycondicinonesComponent } from './terminosycondicinones/terminosycondicinones.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductoComponent } from './producto/producto.component';


@NgModule({
  declarations: [DashboardIndexComponent, LoginComponent, RegistroComponent, TerminosycondicinonesComponent, TiendaComponent, ContactoComponent, ProductoComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [DashboardIndexComponent, LoginComponent, RegistroComponent, TerminosycondicinonesComponent, ContactoComponent, ProductoComponent, TiendaComponent]
})
export class PagesModule { }
