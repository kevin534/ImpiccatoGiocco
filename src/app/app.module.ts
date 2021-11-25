import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { FigureComponent } from './figure/figure.component';
import { EndComponent } from './end/end.component';
import { InsertWordComponent } from './insert-word/insert-word.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FigureComponent,
    EndComponent,
    InsertWordComponent
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
