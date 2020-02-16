import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from '../../services/data-local.service';
import { Register } from '../../models/registro.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  regist: Register;
  key: string;
  
  swiperOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor(private barcodeScanner: BarcodeScanner, private dataLocal: DataLocalService) {}

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      if(!barcodeData.cancelled){
        this.dataLocal.guardarRegistro(this.key, this.regist);
      }
    }).catch(err => {
      console.log('Error', err);
      this.dataLocal.guardarRegistro('regist', {name: 'aaaaa', barcode: 'bbbb', barralibre: '', icon: 'globe', created: new Date()});
    });

  }

}
