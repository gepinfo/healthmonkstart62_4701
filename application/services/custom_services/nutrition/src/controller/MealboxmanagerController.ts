import { Request, Response } from 'express';
import { MealboxmanagerService } from '../service/MealboxmanagerService';
import { CustomLogger } from '../config/Logger'
let Mealboxmanager = new MealboxmanagerService();

export class MealboxmanagerController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
Mealboxmanager.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into MealboxmanagerController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from MealboxmanagerController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
Mealboxmanager.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into MealboxmanagerController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from MealboxmanagerController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
Mealboxmanager.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into MealboxmanagerController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from MealboxmanagerController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
Mealboxmanager.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into MealboxmanagerController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from MealboxmanagerController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
Mealboxmanager.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into MealboxmanagerController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from MealboxmanagerController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
Mealboxmanager.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into MealboxmanagerController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from MealboxmanagerController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
Mealboxmanager.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into MealboxmanagerController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from MealboxmanagerController.ts: GpCreate');
    })}


}