import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArenaComponent } from './components/arena/arena.component';
import { LoginComponent } from './components/login/login.component';
import { SelectCharacterComponent } from './components/select-character/select-character.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'select-character', component: SelectCharacterComponent},
  {path: 'arena', component: ArenaComponent},
  {path: '**', redirectTo: 'LoginComponent'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
