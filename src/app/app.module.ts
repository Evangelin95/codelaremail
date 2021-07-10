import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PrincipalComponent } from './internas/principal/principal.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IgxAvatarModule } from 'igniteui-angular';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { VistaMensajeComponent } from './internas/vista-mensaje/vista-mensaje.component';
import {MatTabsModule} from '@angular/material/tabs';
import { TabsComponent } from './internas/tabs/tabs.component';
import {MatTableModule} from '@angular/material/table';
import { BandejaComponent } from './internas/bandeja/bandeja.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    VistaMensajeComponent,
    TabsComponent,
    BandejaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    IgxAvatarModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
