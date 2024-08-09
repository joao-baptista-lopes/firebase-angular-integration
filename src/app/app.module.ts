import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './pages/login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import {MatIconModule} from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { environment } from '../environments/environment.development';
import {AngularFireModule} from '@angular/fire/compat';
import { UsuariosComponent } from './pages/usuarios/usuarios.component'

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatIconModule,
    FormsModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
