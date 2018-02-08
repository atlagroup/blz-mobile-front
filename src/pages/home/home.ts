import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  information: string = "fuel";

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {

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

}
