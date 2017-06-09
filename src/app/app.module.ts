import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgePipe } from './age.pipe';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { NewAnimalComponent } from './new-animal/new-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    AgePipe,
    AnimalListComponent,
    NewAnimalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
