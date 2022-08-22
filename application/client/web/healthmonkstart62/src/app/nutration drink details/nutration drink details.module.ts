import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Nutration drink detailsComponent } from './nutration drink details.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgSelectModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: Nutration drink detailsComponent },
        ])
    ],
    declarations: [
        Nutration drink detailsComponent,
    ]
})
export class Nutration drink detailsModule { }