# ng2-dragula-blank-setup
Started a blank ionic 2 application and have ng2-dragula installed and ready to go!

**Run npm install**

So there are a couple changes from the tutorial video I sent you guys I fixed them so they would be up to date with current updates in ionic2 and ng2-dragula

the key changes you need to make are in these three files **_home.ts_**, **_home.scss_**, **_app.module.ts_**

in **app.module.ts**
```typescript

...
...
//add this line to import the dragula Module
import { DragulaModule } from '../../node_modules/ng2-dragula/ng2-dragula';
...
...
  imports: [
    IonicModule.forRoot(MyApp),
    //add the DragulaModule to imports!!
    DragulaModule
  ],
...
...

```
in **home.scss**
```scss

@import "../../../node_modules/dragula/dist/dragula.min.css";
// Dragula stuff

.gu-mirror{
  position: fixed !important;
  margin: 0 !important;
  z-index: 9999 !important;
  opacity: 0.8;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
  filter: alpha(opacity=80);
}
.gu-hide{
  display: none !important;
}
.gu-unselectable{
  -webkit-user-select: none !important;
  -ms-user-select: none !important;
  -moz-user-select: none !important;
  user-select: none !important;
}
.gu-transit{
  opacity: 0.2;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
  filter: alpha(opacity=20);
}

```
in **home.ts**
```typescript

import { Component } from '@angular/core';
//import AlertController!!
import { NavController, AlertController } from 'ionic-angular';
//import DragulaService!!
import { DragulaService } from '../../../node_modules/ng2-dragula/ng2-dragula';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  //add DragulaService to providers!!
  providers: [DragulaService]
})
export class HomePage {
//create 2 'bags' to play with dragula!!
  bucket1 = [];
  bucket2 = [];
//add DragulaService and AlertController in the params of constructor function!!
  constructor(public navCtrl: NavController, private dragulaService: DragulaService, private alertCtrl: AlertController) {
  // creates 20 objects and pushes them into the bucket arrays for us to play with!!
    for(var i = 0; i < 20; i++){
      this.bucket1.push('1.<' + i + '>');
      this.bucket2.push('2.<' + i + '>');
    }
    //dragula event that we subscribed to listen for drops then present this alert!!
    dragulaService.drop.subscribe((value)=>{
      let prompt = this.alertCtrl.create({
        title: 'item moved',
        subTitle: 'so much fun!',
        buttons:['OK']
      });
      prompt.present();
    });
  }

}

```
