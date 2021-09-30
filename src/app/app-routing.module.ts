import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { CenzorComponent } from './work/cenzor/cenzor.component';
import { UserListComponent } from './work/user-list/user-list.component';
import { TaskListComponent } from './work/task-list/task-list.component';
import { PhoneBookComponent } from './work/phone-book/phone-book.component';

const routes: Routes = [
  { path : '' ,pathMatch : 'full' , redirectTo : 'home'},
  { path : 'home' , component : HomeComponent },
  { path : 'work' , component : WorkComponent , children : [
    {path : 'cenzor' , component : CenzorComponent },
    {path : 'user-list' ,component : UserListComponent},
    {path : 'task-list' ,component : TaskListComponent},
    {path : 'phone-book' ,component : PhoneBookComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



