import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the CarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car',
  templateUrl: 'car.html',
})
export class CarPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  )
  {

  }

  newFuel() {
    let alert = this.alertCtrl.create({
      title: 'Cadastrar Abastecimento',
      inputs: [
        {
          name: 'data',
          placeholder: 'Data'
        },
        {
          name: 'km',
          placeholder: 'KM'
        },
        {
          name: 'type',
          placeholder: 'Tipo'
        },
        {
          name: 'value',
          placeholder: 'Valor'
        },
        {
          name: 'gty',
          placeholder: 'Quantidade'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    alert.present();
  }

  newMaintenance() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarPage');
  }

}
