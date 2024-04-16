import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { BtnPrimaryComponent } from '../../shared/btn-primary/btn-primary.component';
import { MainSectionComponent } from '../../shared/main-section/main-section.component';
import { MainAnimationComponent } from '../../shared/main-animation/main-animation.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from '../../shared/about/about.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent,
    MainSectionComponent,
    MainAnimationComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    HomeComponent
  ]
})

export class HomeModule { }
