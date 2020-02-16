import { Component } from '@angular/core';
import { Register } from '../../models/registro.model';
import { DataLocalService } from '../../services/data-local.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  register: string;
  key: string;

  constructor(public dataLocal: DataLocalService, private navCtrl: NavController) {
  }

  async ionViewDidEnter(){
    this.register = await this.dataLocal.cargarStorage(this.key);
    console.log('-------->', this.register);
  }

  cancel(key){
    this.key = key;
    this.dataLocal.removeStorage('regist');
    this.navCtrl.navigateBack('/tabs/tab1');
  }

}
