import { Routes, RouterModule } from '@angular/router';
 
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { LogsComponent } from './logs/logs.component';
 
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'portal', component: HomeComponent },
  { path: 'logs', component: LogsComponent },
  { path: 'configuracoes', component: ConfiguracoesComponent },
  { path: '', redirectTo: '/portal', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
 
export const routing = RouterModule.forRoot(appRoutes);