import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// module
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu'
import { AngularSvgIconModule } from 'angular-svg-icon';
// component
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { SidenavComponent } from './components/sidenav/sidenav.component'
import { FooterComponent } from './components/footer/footer.component'
import { HomeComponent } from './pages/home/home.component'
import { ProductsComponent } from './pages/products/products.component'
import { PurposeComponent } from './pages/purpose/purpose.component'
import { MissionComponent } from './pages/mission/mission.component'
import { RecipesComponent } from './pages/recipes/recipes.component'
import { DoleComponent } from './pages/dole/dole.component'

// services
import { SidenavService } from './services/sidenav.service'


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    PurposeComponent,
    MissionComponent,
    RecipesComponent,
    DoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
