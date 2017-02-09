
//tsc -w *.ts comando para crear el watcher
import {Component, OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../models/restaurante";



@Component({
    selector: "restaurante-detail",
    templateUrl: "app/view/restaurante-detail.html",
    providers: [RestauranteService]
})


export class RestaurantesDetailComponent implements OnInit{

ngOnInit(){

        console.log("hola");
    }


}


