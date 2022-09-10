import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [  
 
{
  path: 'login',
  component: LoginComponent
},
{
  path: '',
  component: ArticleComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
