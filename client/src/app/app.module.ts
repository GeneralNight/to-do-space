import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { ComponentsModule } from './components/components.module';
import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    LoginModule,
     RegisterModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
