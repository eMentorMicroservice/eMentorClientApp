import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AppTextBoxComponent } from './controls/app-text-box/app-text-box.component';
import { InvalidmessageDirective } from './directives/invalid-message.directive';
import { InvalidTypeDirective } from './directives/invalid-type.directive';

@NgModule({
  declarations: [
    //components
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AppTextBoxComponent,
    //directives
    InvalidmessageDirective,
    InvalidTypeDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
