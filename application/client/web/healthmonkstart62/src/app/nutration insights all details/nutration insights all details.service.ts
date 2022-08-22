import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class Nutration insights all detailsService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

}