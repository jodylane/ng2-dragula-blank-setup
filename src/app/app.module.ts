import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MemoryPage } from '../pages/memory/memory';
import { DragulaModule } from '../../node_modules/ng2-dragula/ng2-dragula';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MemoryPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    DragulaModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MemoryPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
