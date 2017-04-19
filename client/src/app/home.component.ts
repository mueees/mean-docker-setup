import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";

@Component({
    template: require('./home.html')
})
export class HomeComponent implements OnInit {
    API = '';

    people: any[] = [];

    constructor(private http: Http) {
    }

    ngOnInit() {
        this.getAllPeople();
    }

    addPerson(name: string, age: number) {
        this.http.post(`${this.API}/users`, {name, age})
            .map((res: any) => res.json())
            .subscribe(() => {
                this.getAllPeople();
            })
    }

    getAllPeople() {
        this.http.get(`${this.API}/users`)
            .map((res: any) => res.json())
            .subscribe((people: any) => {
                console.log(people);

                this.people = people;
            })
    }
}