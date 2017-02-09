
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
    public restaurante: Restaurante
    public errorMessage: string;
    public status: string;

    constructor(
        private _restauranteService: RestauranteService,
        private _routeParams: RouteParams
    ){}

    ngOnInit(){
        console.log("hola");
        this.getRestaurante();
    }

    getRestaurante(){
        let id = this._routeParams.get("id");
        console.log('GET RESTAURANTE ID', id)
        this._restauranteService.getRestaurante(id).subscribe(
            response => {
                    this.restaurante = response.data
                    this.status = response.status;
                    if (this.status != "success"){
                            alert("Error en el servidor");
                    }
            }, error => {
                    this.errorMessage = <any>error;
                    if(this.errorMessage !== null){
                        console.log('Error', this.errorMessage);
                    }
            }
        );
    }


}


