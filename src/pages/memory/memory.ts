import {Component} from '@angular/core';
import {NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

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
    squares = [];
    memorySquares = [];
    match = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public toastCtrl: ToastController) {
        this.startGame();
    }

    startGame(): void {
        this.timeOut();
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
        let length = this.colors.length;
        for (let i = 0; i < length; i++) {
            let rand = Math.floor(Math.random() * this.colors.length);
            let color = this.colors[rand];
            this.squares.push(color);
            this.squares.push(color);
            this.colors.splice(rand, 1);
        }

        for(let i = 0;i < this.squares.length;i++){
             let id = this.squares[i].id = i;
             let obj = {
                 "colorName": this.squares[i].colorName,
                 "id": id,
                 "checked": false,
                 "solved": false
             };
            this.memorySquares.push(obj);
        }

        //random color assortment
        this.memorySquares.sort(() => {
            return 0.5 - Math.random();
        });
    }

    restartGame(): void {
        this.memorySquares = [];
        this.squares = [];
        this.startGame();
    }

    matchMaker(item):void{
        console.log(item);
        let tryAgain = 0;
        this.match.push(item);
        // shows the color of object 1 and 2
        if(this.match.length == 1){
            this.show(this.match[0]);
        }else if(this.match.length == 2){
            this.show(this.match[1]);
            // if the color names match then it checks for the same id
            // if the ids are different then we have a match and we disable the two colors
            if(this.match[0].colorName == this.match[1].colorName){
                if(this.match[0].id != this.match[1].id){
                    console.log("we match and are not the same");
                    for(let i = 0;i < this.match.length;i++){
                        for(let j = 0;j < this.memorySquares.length;j++){
                            if(this.memorySquares[j].id == this.match[i].id){
                                this.memorySquares[j].solved = true;
                                console.log(this.memorySquares[j]);
                            }
                        }
                    }
                    for(let k = 0;k < this.memorySquares.length;k++){
                        if(!this.memorySquares[k].solved){
                            tryAgain++;
                        }
                        console.log(tryAgain)
                    }
                    if(tryAgain == 0){
                        this.toast("You Won!!")
                    }
                    this.match = [];
                }else{
                    this.hide(this.match.length, this.match);
                    this.match = [];
                    console.log("we dont match")
                }

            }else {
                this.hide(this.match.length, this.match);
                this.match = [];
            }
        }
        console.log(this.match, this.memorySquares)
    }
    show(object):void{
        for(let i = 0;i < this.memorySquares.length;i++) {
            if(this.memorySquares[i].id == object.id) {
                this.memorySquares[i].checked = true;
            }
        }
    }
    hide(length, object):void{
        for(let i = 0;i < length;i++){
            for(let j = 0;j < this.memorySquares.length;j++){
                if(this.memorySquares[j].id == object[i].id){
                    this.memorySquares[j].checked = false;
                }
            }
        }
    }
    toast(message):void{
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: "middle"
        });
        toast.present();
    }
    timeOut():any{
        let tick = 0;
        setTimeout(() =>{
            tick++;
            return tick
        },1000)
    }
}
