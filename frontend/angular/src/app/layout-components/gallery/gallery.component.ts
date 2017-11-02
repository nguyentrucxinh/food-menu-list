import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {

  private url: string = 'http://api-dot-foodmenulist.appspot.com';
  private url_local: string = 'http://localhost:8080';
  private items: any[];

  ngOnInit(): void {
  }

  constructor(private http: Http) {
    this.findByAll();
  }

  findByAll() {
    this.http.get(`${this.url}/api/items`)
      .map((response: Response) =>response.json())
      .subscribe(
        (success: any) => {
          this.items = success;
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  public chunkArray(myArray, chunk_size){
    let clone = this.cloneObject(myArray);

    let results = [];

    while (clone.length) {
      results.push(clone.splice(0, chunk_size));
    }

    return results;
  }

  public cloneObject(obj): any {
    return JSON.parse(JSON.stringify(obj));
  }

}
