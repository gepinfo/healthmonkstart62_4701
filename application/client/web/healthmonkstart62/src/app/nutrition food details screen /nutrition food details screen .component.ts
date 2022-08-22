import { Component, OnInit } from '@angular/core';
import { Nutrition food details screen Service } from './nutrition food details screen .service';

@Component({
  selector: 'app-nutrition food details screen ',
  templateUrl: './nutrition food details screen .component.html',
  styleUrls: ['./nutrition food details screen .component.scss'],
})

export class Nutrition food details screen Component implements OnInit {
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
        private nutrition food details screen Service: Nutrition food details screen Service,
    ) { }

    ngOnInit() {
        this.Mealboxmanager.created_by = sessionStorage.getItem('email') || ''; 
    }
}