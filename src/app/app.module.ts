import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {NotFoundComponent} from './not-found/not-found.component';

import {UserService} from './user-service/user.service';

const appRoutes: Routes = [
    {path: 'users', component: UserListComponent},
    {path: 'users/:id', component: UserDetailComponent},
    {path: '', redirectTo: 'users', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, UserListComponent, UserDetailComponent, NotFoundComponent],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {

}

console.log('Running');
