import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsGuard } from './guard/permissions.guard';
import { ComponenteComponent } from './pages/componente/componente.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { TableComponent } from './pages/table/table.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"post",component:PostComponent,canActivate:[PermissionsGuard]},
  {path:"componente",component:ComponenteComponent},
  {path:"table",component:TableComponent},
  {path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
