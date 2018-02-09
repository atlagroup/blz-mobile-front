import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 export class Car{
  plate: string;
  model: string;
  brand: string;
  year: string;
  driver: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  list: FirebaseListObservable<any[]>;

  information: string = "fuel";

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public af: AngularFireDatabase
  ) {

  }

  getList(){
    this.list = this.af.list('/cars') as FirebaseListObservable<any[]>;
    console.log(this.list);
    return this.list;
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
    console.log('ionViewDidLoad HomePage');
  }

}
