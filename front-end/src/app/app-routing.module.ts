import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/form/form.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
      path: 'form',
      component: FormComponent
  },
  {
      path: '**',
      component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
