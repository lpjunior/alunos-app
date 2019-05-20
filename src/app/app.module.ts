import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NotasComponent } from './notas/notas.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    NotasComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
