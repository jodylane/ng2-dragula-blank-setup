import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

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
    memorySquares= [];
    constructor(public navCtrl:NavController, public navParams:NavParams, public alertCtrl:AlertController) {
        this.startGame();
    }
    startGame():void{
        this.colors = [
            {
                "colorName": "blue"
            },
            {
                "colorName": "red"
            },
            {
                "colorName": "green"
            },
            {
                "colorName": "yellow"
            }
        ];
            for(let i = 0;i < 4;i++){
                let rand = Math.floor(Math.random() * this.colors.length);
                let color = this.colors[rand].colorName;
                this.memorySquares.push(color);
                this.memorySquares.push(color);
                this.colors.splice(rand,1);
                console.log(rand,color)
                console.log(this.colors[rand],this.colors)
            }
            console.log(this.memorySquares);
        this.memorySquares.sort(()=>{
            return 0.5 - Math.random();
        })
        console.log(this.memorySquares)
    }
    restartGame():void{
        this.memorySquares = [];
        this.startGame();
    }
}
