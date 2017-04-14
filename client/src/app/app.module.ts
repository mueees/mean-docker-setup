import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
// Components
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app.routing";
import {HomeComponent} from "./home.component";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        HomeComponent,
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}