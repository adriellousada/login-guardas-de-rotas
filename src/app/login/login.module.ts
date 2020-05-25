import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [LoginService]
})
export class AlunosModule { }
