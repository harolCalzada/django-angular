
//tsc -w *.ts comando para crear el watcher
import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../models/restaurante";



@Component({
    selector: "restaurantes-list",
    templateUrl: "app/view/restaurantes-list.html",
    directives: [ROUTER_DIRECTIVES],
    providers: [RestauranteService]
})


export class RestaurantesListComponent implements OnInit{
    public titulo:string = "Listado de Restaurantes";
    public restaurantes: Restaurante[];
    public status: string;
    public errorMessage;
    public loading;
    constructor(private _restauranteService: RestauranteService){

    }
    ngOnInit(){
        this.getRestaurantes()
        this.loading = 'show';
        console.log("Restaurantes cargando");
    }
    getRestaurantes(){
        let box_restaurantes = <HTMLElement>document.querySelector("restaurantes-list .loading");
        box_restaurantes.style.visibility = "visible";
        this._restauranteService.getRestaurantes().subscribe(result => {
            this.restaurantes = result.data;
            console.log('RESTAURANTES', this.restaurantes)
            this.status = result.status;
            if (this.status != "success"){
                alert("Error en el servidor");
            }
             this.loading = 'hide';
        }, error => {
            this.errorMessage = <any>error;
            if(this.errorMessage !== null){
                console.log('Error', this.errorMessage);
            }
        });
    }
}


