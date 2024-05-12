import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, ComponentsModule],  
})
export class LoginModule { 
  
}
