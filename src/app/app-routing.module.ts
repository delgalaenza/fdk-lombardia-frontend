import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComitatoComponent } from './pages/comitato/comitato.component';
import { SettoriComponent } from './pages/settori/settori.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comitato', component: ComitatoComponent },
  { path: 'settori', component: SettoriComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
