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


@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.page.html',
  styleUrls: ['./pictures.page.scss'],
})
export class PicturesPage implements OnInit {

  constructor(navParams: NavParams, public modalCtrl: ModalController) {}

  ngOnInit() {
  }

}
