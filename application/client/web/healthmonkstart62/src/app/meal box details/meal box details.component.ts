import { Component, OnInit } from '@angular/core';
import { Meal box detailsService } from './meal box details.service';

@Component({
  selector: 'app-meal box details',
  templateUrl: './meal box details.component.html',
  styleUrls: ['./meal box details.component.scss'],
})

export class Meal box detailsComponent implements OnInit {
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
        private meal box detailsService: Meal box detailsService,
    ) { }

    ngOnInit() {
        this.Mealboxmanager.created_by = sessionStorage.getItem('email') || ''; 
    }
}