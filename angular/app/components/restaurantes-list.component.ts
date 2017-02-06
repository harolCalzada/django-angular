
//tsc -w *.ts comando para crear el watcher
import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../models/restaurante";



@Component({
    selector: "restaurantes-list",
    templateUrl: "app/view/restaurantes-list.html",
    providers: [RestauranteService]
})


export class RestaurantesListComponent implements OnInit{
    public titulo:string = "Listado de Restaurantes";
    public restaurantes: Restaurante[];
    public status: string;
    public errorMessage;
    constructor(private _restauranteService: RestauranteService){

    }
    ngOnInit(){
        this.getRestaurantes()
        console.log("Restaurantes cargando");
    }
    getRestaurantes(){
        this._restauranteService.getRestaurantes().subscribe(result => {
            this.restaurantes = result.data;
            console.log('RESTAURANTES', this.restaurantes)
            this.status = result.status;
            if (this.status != "success"){
                alert("Error en el servidor");
            }
        }, error => {
            this.errorMessage = <any>error;
            if(this.errorMessage !== null){
                console.log('Error', this.errorMessage);
            }
        });

    }

    }


