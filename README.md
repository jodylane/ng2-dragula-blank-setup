# ng2-dragula-blank-setup
Started a blank ionic 2 application and have ng2-dragula installed and ready to go!

So there are a couple changes from the tutorial video I sent you guys I fixed them so they would be up to date with current updates in ionic2 and ng2-dragula

the key changes you need to make are in these three files **home.ts, index.html, app.module.ts**

in app.module.ts
```typescript

...
...
import { DragulaModule } from '../../node_modules/ng2-dragula/ng2-dragula';
...
...
  imports: [
    IonicModule.forRoot(MyApp),
    DragulaModule
  ],
...
...

```
in index.html
```html
...
...

  <link href="build/main.css" rel="stylesheet">
  <link href="../node_modules/dragula/dist/dragula.min.css" rel="stylesheet">

</head>
<body>
...
...

```
in home.ts
```typescript

import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { DragulaService } from '../../../node_modules/ng2-dragula/ng2-dragula';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DragulaService]
})
export class HomePage {

  bucket1 = [];
  bucket2 = [];

  constructor(public navCtrl: NavController, private dragulaService: DragulaService, private alertCtrl: AlertController) {
    for(var i = 0; i < 20; i++){
      this.bucket1.push('1.<' + i + '>');
      this.bucket2.push('2.<' + i + '>');
    }
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
