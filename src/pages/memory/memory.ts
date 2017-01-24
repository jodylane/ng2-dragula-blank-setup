import {Component} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';

/*
 Generated class for the Memory page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */

@Component({
    selector: 'page-memory',
    templateUrl: 'memory.html'
})
export class MemoryPage {
    colors = [];
    memorySquares = [];
    match = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
        this.startGame();
    }

    startGame(): void {
        this.colors = [
            {
                "id": "",
                "colorName": "blue"
            },
            {
                "id": "",
                "colorName": "red"
            },
            {
                "id": "",
                "colorName": "green"
            },
            {
                "id": "",
                "colorName": "yellow"
            }
        ];
        for (let i = 0; i < 4; i++) {
            let rand = Math.floor(Math.random() * this.colors.length);
            let color = this.colors[rand];
            this.memorySquares.push(color);
            this.memorySquares.push(color);
            this.colors.splice(rand, 1);
        }

        for(let i = 0;i < this.memorySquares.length;i++){
             this.memorySquares[i].id = this.memorySquares[i].colorName + i;


            console.log(this.memorySquares[i].id,this.memorySquares.length)
        }

        //random color assortment
        console.log("randbefore: ",this.memorySquares);
        this.memorySquares.sort(() => {
            return 0.5 - Math.random();
        });
        //randomize random assortment
        console.log(this.memorySquares)
    }

    restartGame(): void {
        this.memorySquares = [];
        this.startGame();
    }
    matchMaker(item):void{
        this.match.push(item);
        if(this.match[0] == this.match[1]){

        }else if(this.match[0] == this.match[1]){

        }
        console.log(this.match)
    }
}
