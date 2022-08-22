import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Selected food view breakfastComponent } from './selected food view breakfast.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgSelectModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: Selected food view breakfastComponent },
        ])
    ],
    declarations: [
        Selected food view breakfastComponent,
    ]
})
export class Selected food view breakfastModule { }