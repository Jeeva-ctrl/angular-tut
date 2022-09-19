import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RainbowDirective } from './RainbowDirective';
import { CardHoverDirective } from './CardHoverDirective';
import { PupComponent } from './childComponent/PupComponent';
import { ChangeDetectionStratergyComponent } from './changeDetectionStratergy/ChangeDetectionStrategy.component';
import { ChangeDetectionStratergyChildComponent } from './changeDetectionStratergy/ChangeDetectionChild.Component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    RainbowDirective,
    CardHoverDirective,
    PupComponent,
    ChangeDetectionStratergyComponent,
    ChangeDetectionStratergyChildComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
