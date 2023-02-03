import {ENVIRONMENT_INITIALIZER, inject, NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header.component';
import { AppRoutingModule } from './app.routing.module';
import {QueryClientService} from "@ngneat/query";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    RouterOutlet,
    HttpClientModule,
  ],
  providers: [
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue() {
        const queryClient = inject(QueryClientService);
        import('@ngneat/query-devtools').then((m) => {
          m.ngQueryDevtools({ queryClient });
        });
      },
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
