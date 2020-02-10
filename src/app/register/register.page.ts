import {
    Component,
    OnInit
} from '@angular/core';
import {
    NavParams
} from '@ionic/angular';
import {
    ModalController
} from '@ionic/angular';

import { PicturesPage } from '../pictures/pictures.page';


@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    name : any = '';
    phone : any = '';
    defultData : boolean = true;
    isNameError : boolean = false;
    isPhoneError : boolean = false;

    constructor(navParams: NavParams, public modalCtrl: ModalController) {}

    ngOnInit() {}

    dismiss() {
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }

    async nextStep() {
        

        if (this.name == '') {
           this.isNameError = true;
        }else{
            this.isNameError = false;
        }

        if (this.phone == '') {
           this.isPhoneError = true;
        }else{
            this.isPhoneError = false;
        }

        if (this.name != '' && this.phone != '') { 
           localStorage.setItem("name", this.name);
           localStorage.setItem("phone", this.phone);
           const modal = await this.modalCtrl.create({
                component: PicturesPage
            });
            return await modal.present();
        }
    }

}