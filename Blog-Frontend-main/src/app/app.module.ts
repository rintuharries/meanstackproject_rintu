import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './sections/users/users.component';
import { PostComponent } from './sections/post/post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './sections/home/home.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { HomeMainComponent } from './home-main/home-main.component';


@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    FooterComponent,
    UsersComponent,
    PostComponent,
    NavbarComponent,
    HomeComponent,
    UserComponent,
    AdminComponent,
    NavbarAdminComponent,
    SidebarAdminComponent,
    HomeMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
