import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { SelectPlayersComponent } from './select-players/select-players.component'
import { SelectCaptainComponent } from './select-captain/select-captain.component'


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'selectPlayers', component: SelectPlayersComponent },
  { path: 'selectCaptain', component: SelectCaptainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
