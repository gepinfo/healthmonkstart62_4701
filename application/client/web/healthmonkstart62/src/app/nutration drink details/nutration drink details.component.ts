import { Component, OnInit } from '@angular/core';
import { Nutration drink detailsService } from './nutration drink details.service';

@Component({
  selector: 'app-nutration drink details',
  templateUrl: './nutration drink details.component.html',
  styleUrls: ['./nutration drink details.component.scss'],
})

export class Nutration drink detailsComponent implements OnInit {
    public Mealboxmanager = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        kcal: '',
        carbohydrates: '',
        protein: '',
        portion: '',
    }

    constructor (
        private nutration drink detailsService: Nutration drink detailsService,
    ) { }

    ngOnInit() {
        this.Mealboxmanager.created_by = sessionStorage.getItem('email') || ''; 
    }
}