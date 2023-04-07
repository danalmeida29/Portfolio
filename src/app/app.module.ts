import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Pages/home/home.component';
import { HeaderComponent } from './Shared/header/header.component';
import { MaterialModule } from './material.module';
import { ProjetosComponent } from './Components/projetos/projetos.component';
import { AboutComponent } from './Components/about/about.component';
import { ContatoComponent } from './Components/contato/contato.component';

// import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
// // import {TranslateHttpLoader} from '@ngx-translate/http-loader';
// import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProjetosComponent,
    AboutComponent,
    ContatoComponent,
  ],
  imports: [
  //   SlickCarouselModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    // HttpClientModule,
    // TranslateModule.forRoot({
    //   loader: {
    //       provide: TranslateLoader,
    //       useFactory: HttpLoaderFactory,
    //       deps: [HttpClient]
    //   }
    // })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }
//: TranslateHttpLoader