import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { RegisterComponent } from './register.component';


@NgModule({
  declarations: [RegisterComponent],
imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, ComponentsModule],  
})
export class RegisterModule { }
