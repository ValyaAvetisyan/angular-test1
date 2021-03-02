import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserHomeComponent} from './user-home.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import {MatTableModule} from '@angular/material/table';


const routes: Routes = [
  {
    path: '',
    component: UserHomeComponent
  }
];


@NgModule({
  declarations: [UserHomeComponent],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AuthService,
    UserService
  ],
  exports: [
  ]
})
export class UserHomeModule {
}
