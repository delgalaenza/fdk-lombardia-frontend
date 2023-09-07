import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { ScrollListenerDirective } from './shared/directives/scroll-listener.directive';
import { ResizeListenerDirective } from './shared/directives/resize-listener.directive';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SettoriComponent } from './pages/settori/settori.component';
import { ComitatoComponent } from './pages/comitato/comitato.component';
import { OverflowDetectorDirective } from './shared/directives/overflow-detector.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ScrollListenerDirective,
    ResizeListenerDirective,
    FooterComponent,
    HomeComponent,
    SettoriComponent,
    ComitatoComponent,
    OverflowDetectorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
