import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router, ActivatedRoute } from "@angular/router";


@Injectable()
export class AppService {


	constructor(private http: Http) {

	}


	getProducts() {
		return this.http
		.get("http://localhost:3000/get-products")
		.map((response: Response) => {
              let productList = response.json();
              return productList;
        }); 
    }

   


}
