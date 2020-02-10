import {
    Component
} from '@angular/core';
import {
    LoadingController
} from '@ionic/angular';
import {
    ModalController
} from '@ionic/angular';
import {
    RegisterPage
} from '../register/register.page';
import {
    ToastController
} from '@ionic/angular';
import { AlertController, } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    isError = false;
    constructor(public alertController: AlertController, public toastController: ToastController, public loadingController: LoadingController, public modalController: ModalController) {}

    async submitLogin() {
        const loading = await this.loadingController.create({
            message: 'Please wait..',
            duration: 2000
        });
        await loading.present();
        const toast = await this.toastController.create({
            message: 'The username and password you entered did not match our records. Please double-check and try again.',
            duration: 2000,
            color: "danger",
            showCloseButton: true,
        });

        setTimeout(() => {
            toast.present();
            //this.isError = true;
        }, 2000);
    }

    async register() {
        const modal = await this.modalController.create({
            component: RegisterPage
        });
        return await modal.present();
    }

    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }

    async recovery() {
        const toast = await this.toastController.create({
            message: 'Email not found.',
            duration: 2000,
            color: "danger",
            showCloseButton: true,
        });
    const alert = await this.alertController.create({
      header: 'Forgot password?',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Enter email'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            
            toast.present();
            //return false;
          }
        }
      ]
    });

    await alert.present();
  }


}