import { Component, OnInit } from '@angular/core';
import { Save meal popup screenService } from './save meal popup screen.service';

@Component({
  selector: 'app-save meal popup screen',
  templateUrl: './save meal popup screen.component.html',
  styleUrls: ['./save meal popup screen.component.scss'],
})

export class Save meal popup screenComponent implements OnInit {
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
        private save meal popup screenService: Save meal popup screenService,
    ) { }

    ngOnInit() {
        this.Mealboxmanager.created_by = sessionStorage.getItem('email') || ''; 
    }
}