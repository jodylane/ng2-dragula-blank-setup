import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {DragulaService} from '../../../node_modules/ng2-dragula/ng2-dragula';
import {dragula} from "ng2-dragula";
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [DragulaService]
})
export class HomePage {
    food = [
        {
            "name": "Pineapple",
            "picture": "http://www.foodlecompany.com/wp-content/uploads/2015/04/pineapple.jpg",
            "category": "fruit"
        },
        {
            "name": "Mango",
            "picture": "http://images.wisegeek.com/mango.jpg",
            "category": "fruit"
        },
        {
            "name": "Grapes",
            "picture": "http://eatgoodfood.org/wp-content/uploads/2013/11/grapes-health-benefits.jpg",
            "category": "fruit"
        },
        {
            "name": "Strawberries",
            "picture": "http://www.thepacker.com/sites/produce/files/field/image/strawberries-2.jpg",
            "category": "fruit"
        }];
    animals = [
        {
            "name": "Cow",
            "picture": "http://animal-dream.com/data_images/cow/cow3.jpg",
            "category": "animals"
        },
        {
            "name": "Chicken",
            "picture": "http://animal-dream.com/data_images/chicken/chicken6.jpg",
            "category": "animals"
        },
        {
            "name": "Dog",
            "picture": "http://cdn3-www.dogtime.com/assets/uploads/2014/08/file_23300_cane-corso-dog-breed.jpg",
            "category": "animals"
        },
        {
            "name": "Cat",
            "picture": "http://animal-dream.com/data_images/cat/cat6.jpg",
            "category": "animals"
        }];
    bucket1 = [];
    bucket2 = [];

    constructor(public navCtrl: NavController, private dragulaService: DragulaService, private alertCtrl: AlertController) {
        this.startGame();
        dragulaService.drag.subscribe((value)=>{
            this.onDrag(value);
        });
        dragulaService.drop.subscribe((value) => {
            this.onDrop(value);
            let prompt = this.alertCtrl.create({
                title: 'item moved',
                subTitle: 'so much fun!',
                buttons: ['OK']
            });
            prompt.present();
        });
    }

    private onDrag(args):void{
        console.log("onDrag: ", args);
        let [bagname,target,source]= args;
        let targetClass = target.childNodes[0].className;
        let sourceClass = source.className.split(" ");
        let sourceList = source.children;
        sourceClass = sourceClass.shift();
        console.log("sourceList: ",sourceList)
        for(let i = 0;i < sourceList.length;i++){
            let entry = sourceList[i];
            console.log(entry.children);
        }
        console.log(targetClass, sourceClass)
    }
    private onDrop(args): void {
        console.log("onDrop: ", args);
        let [bagname,target,l,k,j] = args;

    }
    didIWin(item):void {
        console.log("hello world: ",item)
    }
    startGame():void{
        for (let i = 0; i < this.food.length; i++) {
            if (i % 2 == 0) {
                this.bucket1.push(this.food[i]);
                this.bucket1.push(this.animals[i]);
            } else if (i % 2 == 1) {
                this.bucket2.push(this.food[i]);
                this.bucket2.push(this.animals[i]);
            }
        }
    }
    restart():void{
        this.bucket1 = [];
        this.bucket2 = [];
        this.startGame();
    }
}
