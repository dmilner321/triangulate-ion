import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TriangleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TriangleProvider {

  triangulate1 = "https://triangulation.azurewebsites.net/api/Triangulation1?code=kui1FmPO69IMql9IruFCLgxPVhtUw3kp6Bkd06Puphkkn2ixHHnLnw==";

  constructor(private http: HttpClient) {
    console.log('Hello TriangleProvider Provider');
  }

  getTriangle(gridLocation: string) {
    return new Promise(resolve => {
      this.http.get(this.triangulate1+'&gridlocation='+gridLocation).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
