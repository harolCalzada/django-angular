
//tsc -w *.ts comando para crear el watcher
import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {RestaurantesListComponent} from "./components/restaurantes-list.component";


@Component({
    selector: "mi-app",
    templateUrl: "app/view/home.html",
    directives: [RestaurantesListComponent, ROUTER_DIRECTIVES],
    styleUrls: ["../assets/css/styles.css"]
})


export class AppComponent{
    public titulo:string = "Restaurantes";


    }


