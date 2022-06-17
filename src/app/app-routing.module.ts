import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/ingresarPresupuesto' },
  { path: 'ingresarPresupuesto', component: IngresarPresupuestoComponent },
  { path: 'gastos', component: GastosComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/ingresarPresupuesto' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
