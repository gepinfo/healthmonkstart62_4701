import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Nutration insights breakfast screenComponent } from './nutration insights breakfast screen.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgSelectModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: Nutration insights breakfast screenComponent },
        ])
    ],
    declarations: [
        Nutration insights breakfast screenComponent,
    ]
})
export class Nutration insights breakfast screenModule { }