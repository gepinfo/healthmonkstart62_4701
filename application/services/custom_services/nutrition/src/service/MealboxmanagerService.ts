import { Request, Response } from 'express';
import {MealboxmanagerDao} from '../dao/MealboxmanagerDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let Mealboxmanager = new MealboxmanagerDao();

export class MealboxmanagerService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into MealboxmanagerService.ts: GpDelete')
     let  MealboxmanagerId = req.params.id;
     Mealboxmanager.GpDelete(MealboxmanagerId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from MealboxmanagerService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into MealboxmanagerService.ts: GpSearch')
     let  MealboxmanagerData = req.query;
     Mealboxmanager.GpSearch(MealboxmanagerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from MealboxmanagerService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into MealboxmanagerService.ts: GpSearchForUpdate')
     let  MealboxmanagerData = req.body;
     Mealboxmanager.GpSearchForUpdate(MealboxmanagerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from MealboxmanagerService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into MealboxmanagerService.ts: GpUpdate')
     let  MealboxmanagerData = req.body;
     Mealboxmanager.GpUpdate(MealboxmanagerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from MealboxmanagerService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into MealboxmanagerService.ts: GpGetNounById')
     let  MealboxmanagerId = req.params.id;
     Mealboxmanager.GpGetNounById(MealboxmanagerId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from MealboxmanagerService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into MealboxmanagerService.ts: GpGetAllValues')
     
     Mealboxmanager.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from MealboxmanagerService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into MealboxmanagerService.ts: GpCreate')
     let  MealboxmanagerData = req.body;
     Mealboxmanager.GpCreate(MealboxmanagerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from MealboxmanagerService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}