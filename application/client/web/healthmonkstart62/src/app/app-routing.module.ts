import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SefscreenComponent } from './sefscreen/sefscreen.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { UpdateauthorizationComponent } from './authorization/updateauthorization/updateauthorization.component';
import { ManagerolesComponent } from './manageroles/manageroles.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { ManagecontrolComponent } from './managecontrol/managecontrol.component';
import { UserComponent } from './user/user.component';
import { ProfilesettingsComponent } from './user/profilesettings/profilesettings.component';
import { VaultadminComponent } from './vaultadmin/vaultadmin.component';
import { TemplateComponent } from './template/template.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
{ path: 'sefscreen', component: SefscreenComponent, canActivate: [AuthGuard] },
{ path: 'signup', component: SignupComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'authorization', component: AuthorizationComponent, canActivate: [AuthGuard] },
{ path: 'updateauthorization', component: UpdateauthorizationComponent, canActivate: [AuthGuard] },
{ path: 'manageroles', component: ManagerolesComponent, canActivate: [AuthGuard] },
{ path: 'manageusers', component: ManageusersComponent, canActivate: [AuthGuard] },
{ path: 'managecontrol', component: ManagecontrolComponent, canActivate: [AuthGuard] },
{ path: 'usermanagement', component: UserComponent, canActivate: [AuthGuard] },
{ path: 'profile', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
{ path: 'vaultadmin', component: VaultadminComponent, canActivate: [AuthGuard] },
       { path: '', component: TemplateComponent, pathMatch: 'full'   } ,
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },

{ path : 'nutration drink details', loadChildren: () => import('./nutration drink details/nutration drink details.module').then(m => m.Nutration drink detailsModule), canActivate: [AuthGuard] } , 
{ path : 'select food details', loadChildren: () => import('./select food details/select food details.module').then(m => m.Select food detailsModule), canActivate: [AuthGuard] } , 
{ path : 'nutrition food details screen ', loadChildren: () => import('./nutrition food details screen /nutrition food details screen .module').then(m => m.Nutrition food details screen Module), canActivate: [AuthGuard] } , 
{ path : 'save meal popup screen', loadChildren: () => import('./save meal popup screen/save meal popup screen.module').then(m => m.Save meal popup screenModule), canActivate: [AuthGuard] } , 
{ path : 'edited details popup screen', loadChildren: () => import('./edited details popup screen/edited details popup screen.module').then(m => m.Edited details popup screenModule), canActivate: [AuthGuard] } , 
{ path : 'successfully screen popup screen', loadChildren: () => import('./successfully screen popup screen/successfully screen popup screen.module').then(m => m.Successfully screen popup screenModule), canActivate: [AuthGuard] } , 
{ path : 'nutration insights all details', loadChildren: () => import('./nutration insights all details/nutration insights all details.module').then(m => m.Nutration insights all detailsModule), canActivate: [AuthGuard] } , 
{ path : 'nutration insights breakfast screen', loadChildren: () => import('./nutration insights breakfast screen/nutration insights breakfast screen.module').then(m => m.Nutration insights breakfast screenModule), canActivate: [AuthGuard] } , 
{ path : 'nutration insights morning snack screen', loadChildren: () => import('./nutration insights morning snack screen/nutration insights morning snack screen.module').then(m => m.Nutration insights morning snack screenModule), canActivate: [AuthGuard] } , 
{ path : 'selected food view breakfast', loadChildren: () => import('./selected food view breakfast/selected food view breakfast.module').then(m => m.Selected food view breakfastModule), canActivate: [AuthGuard] } , 
{ path : 'view all meal', loadChildren: () => import('./view all meal/view all meal.module').then(m => m.View all mealModule), canActivate: [AuthGuard] } , 
{ path : 'my meal / breakfast ', loadChildren: () => import('./my meal / breakfast /my meal / breakfast .module').then(m => m.My meal / breakfast Module), canActivate: [AuthGuard] } , 
{ path : 'delete items popup screen', loadChildren: () => import('./delete items popup screen/delete items popup screen.module').then(m => m.Delete items popup screenModule), canActivate: [AuthGuard] } , 
{ path : 'meal box details', loadChildren: () => import('./meal box details/meal box details.module').then(m => m.Meal box detailsModule), canActivate: [AuthGuard] } , 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
