import { Component, OnInit } from '@angular/core';
import { View all mealService } from './view all meal.service';

@Component({
  selector: 'app-view all meal',
  templateUrl: './view all meal.component.html',
  styleUrls: ['./view all meal.component.scss'],
})

export class View all mealComponent implements OnInit {
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
        private view all mealService: View all mealService,
    ) { }

    ngOnInit() {
        this.Mealboxmanager.created_by = sessionStorage.getItem('email') || ''; 
    }
}