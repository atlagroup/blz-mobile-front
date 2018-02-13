import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Car } from './../../models/car/car.model';

@Injectable()
export class CarListService{

  private carListRef = this.db.list<Car>('Cars');

  constructor(private db: AngularFireDatabase) { }

  getCarList() {
    return this.carListRef;
  }

}