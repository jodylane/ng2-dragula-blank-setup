import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { DragulaService } from '../../../node_modules/ng2-dragula/ng2-dragula';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [DragulaService]
})
export class HomePage {
    food = [{
        "name": "Pineapple",
        "picture": "http://www.foodlecompany.com/wp-content/uploads/2015/04/pineapple.jpg"
    }, {
        "name": "Mango",
        "picture": "M"
    }, {
        "name": "Grapes",
        "picture": "G"
    }, {
        "name": "Strawberries",
        "picture": "S"
    },];
    animals = [{
        "name": "Cow",
        "picture": "C"
    }, {
        "name": "Chicken",
        "picture": "C"
    }, {
        "name": "Dog",
        "picture": "D"
    }, {
        "name": "Cat",
        "picture": "C"
    },];
    bucket1 = [];
    bucket2 = [];

    constructor(public navCtrl:NavController, private dragulaService:DragulaService, private alertCtrl:AlertController) {

        for (var i = 0; i < this.food.length; i++) {
            console.log(i % 2);
            if (i % 2 == 0) {
                this.bucket1.push(this.food[i]);
                this.bucket1.push(this.animals[i]);
            } else if (i % 2 == 1) {
                this.bucket2.push(this.food[i]);
                this.bucket2.push(this.animals[i]);
            }


        }
        dragulaService.drop.subscribe((value)=> {
            this.onDrop(value.slice(1));
            let prompt = this.alertCtrl.create({
                title: 'item moved',
                subTitle: 'so much fun!',
                buttons: ['OK']
            });
            prompt.present();
        });
    }

}
