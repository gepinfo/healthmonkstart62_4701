import { Component, OnInit } from '@angular/core';
import { Select food detailsService } from './select food details.service';

@Component({
  selector: 'app-select food details',
  templateUrl: './select food details.component.html',
  styleUrls: ['./select food details.component.scss'],
})

export class Select food detailsComponent implements OnInit {
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
        private select food detailsService: Select food detailsService,
    ) { }

    ngOnInit() {
        this.Mealboxmanager.created_by = sessionStorage.getItem('email') || ''; 
    }
}