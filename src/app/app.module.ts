import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { CenzorComponent } from './work/cenzor/cenzor.component';
import { UserListComponent } from './work/user-list/user-list.component';
import { TaskListComponent } from './work/task-list/task-list.component';
import { PhoneBookComponent } from './work/phone-book/phone-book.component';
import { TaskListTableComponent } from './work/task-list/task-list-table/task-list-table.component';

import { SearchPipe } from './work/phone-book/pipes/search.pipe';
import { SortPipe } from './work/phone-book/pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    CenzorComponent,
    UserListComponent,
    TaskListComponent,
    PhoneBookComponent,
    TaskListTableComponent,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
