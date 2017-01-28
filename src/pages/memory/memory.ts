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
    squares = [];
    memorySquares = [];
    match = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
        this.startGame();
    }

    startGame(): void {
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
        this.match.push(item);

        if(this.match.length == 1){
            this.show(this.match[0]);
        }else if(this.match.length == 2){
            this.show(this.match[1]);
            if(this.match[0].colorName == this.match[1].colorName){
                if(this.match[0].id != this.match[1].id){
                    console.log("we match and are not the same");
                    for(let i = 0;i < this.match.length;i++){
                        for(let j = 0;j < this.memorySquares.length;j++){
                            if(this.memorySquares[j].id == this.match[i].id){
                                this.memorySquares[j].solved = true;
                                console.log(this.memorySquares[j]);
                                this.memorySquares.splice(j,1);
                            }
                        }
                    }
                    this.match = [];
                }else{
                    this.match = [];
                    console.log("we dont match")
                }

            }else {
                this.match = [];
            }
        }
        console.log(this.match, this.memorySquares)
    }
    show(index):void{
        for(let i = 0;i < this.memorySquares.length;i++) {
            if(this.memorySquares[i].id == this.match[index].id) {
                this.memorySquares[i].checked = true;
            }
        }
    }
    hide(index):void{
        for(let i = 0;i < this.match.length;i++){
            for(let j = 0;j < this.memorySquares.length;j++){
                if(this.memorySquares[j].id == this.match[i].id){
                    this.memorySquares[j].solved = true;
                    console.log(this.memorySquares[j]);
                    this.memorySquares.splice(j,1);
                }
            }
        }

        
    }
}
