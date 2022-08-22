import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Nutration insights all detailsComponent } from './nutration insights all details.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgSelectModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: Nutration insights all detailsComponent },
        ])
    ],
    declarations: [
        Nutration insights all detailsComponent,
    ]
})
export class Nutration insights all detailsModule { }