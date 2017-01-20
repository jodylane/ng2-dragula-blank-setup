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
