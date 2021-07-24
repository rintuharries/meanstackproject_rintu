import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './sections/home/home.component';
import { PostComponent } from './sections/post/post.component';
import { UsersComponent } from './sections/users/users.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'users', component:UsersComponent },
  { path: 'post', component: PostComponent },
  {path:'user',component:UserComponent},
  {path:'admin',component:AdminComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
