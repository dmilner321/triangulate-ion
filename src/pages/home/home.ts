import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TriangleProvider} from '../../providers/triangle/triangle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public triangle: any;
  public triangleresult: string;
  public triangulate1: string;

  constructor(public navCtrl: NavController, public triangleProvider: TriangleProvider) {

  }

  getTriangle(gridLocation: string) {
      this.triangleProvider.getTriangle(gridLocation)
        .then(data => {
          this.triangle = data;
          this.triangleresult = JSON.stringify(this.triangle);
          console.log(this.triangleresult);
        });
  }
}

interface Triangle {
  gridLocation: string;
  v1x: number;
  v1y: number;
  v2x: number;
  v2y: number;
  v3x: number;
  v3y: number;
  orientation: string;
}
