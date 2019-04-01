import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { XhrInterceptor } from './authentication/xhr.interceptor';
import { principalReducer } from './authentication/shared/principal.reducer';
import { AuthenticationModule } from './authentication/authentication.module';
import { DashboardModule} from './dashboard/dashboard.module';
import { AppMenuModule } from './menu/app.menu.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthenticationModule,
    StoreModule.forRoot({principal: principalReducer}),
    DashboardModule,
    AppMenuModule,
    ProductModule,
    UserModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
