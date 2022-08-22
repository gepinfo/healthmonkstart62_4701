import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Nutration insights morning snack screenComponent } from './nutration insights morning snack screen.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgSelectModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: Nutration insights morning snack screenComponent },
        ])
    ],
    declarations: [
        Nutration insights morning snack screenComponent,
    ]
})
export class Nutration insights morning snack screenModule { }