import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { ListaSimplesComponent } from './pages/lista-simples/lista-simples.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { ManipulandoJsonComponent } from './pages/manipulando-json/manipulando-json.component';
import { SubRouteComponent } from './pages/sub-route/sub-route.component';
import { Page1Component } from './pages/sub-route/page1/page1.component';
import { Page2Component } from './pages/sub-route/page2/page2.component';
import { PrivadoComponent } from './pages/privado/privado.component';
import { AutorizadoGuard } from './guards/autorizado.guard';
import { DetalheComponent } from './pages/detalhe/detalhe.component';


const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'listar', component: ListarComponent},
  { path: 'lista-simples', component: ListaSimplesComponent },
  {path:'cadastro', component: CadastroComponent},
  {path:'login', component: LoginComponent},
  {path:'json', component: ManipulandoJsonComponent},
  { path: 'detalhe/:id/:phone', component: DetalheComponent},
  {path:'subroute', component: SubRouteComponent,
  children: [
    {path:'page1', component: Page1Component},
    {path:'page2', component: Page2Component}
  ]
},
{path:'privado', component: PrivadoComponent,
  canActivate: [AutorizadoGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
