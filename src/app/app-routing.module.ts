import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsGuard } from './guard/permissions.guard';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"post",component:PostComponent,canActivate:[PermissionsGuard]},
  {path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
