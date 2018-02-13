import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Car } from './../../models/car/car.model';
import { CarListService } from './../../services/car-list/car-list.service';
import { CarPage } from './../car/car';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  carList$: Observable<Car[]>;

  constructor(
    public navCtrl: NavController,
    private car: CarListService
  )
  {
    this.carList$ = this.car
    .getCarList()
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({
        key: c.payload.key,
        ...c.payload.val(),
      }));
    });
  }

    pushCarPage(){
      this.navCtrl.push(CarPage);
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
