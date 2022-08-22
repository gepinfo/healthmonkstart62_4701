import { Request, Response, NextFunction } from "express";
import { MealboxmanagerController } from '../controller/MealboxmanagerController';


export class Routes {
    private Mealboxmanager: MealboxmanagerController = new MealboxmanagerController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/Mealboxmanager/:id').delete(this.Mealboxmanager.GpDelete);
app.route('/Mealboxmanager/get/search').get(this.Mealboxmanager.GpSearch);
app.route('/Mealboxmanager/get/update').put(this.Mealboxmanager.GpSearchForUpdate);
app.route('/Mealboxmanager').put(this.Mealboxmanager.GpUpdate);
app.route('/Mealboxmanager/:id').get(this.Mealboxmanager.GpGetNounById);
app.route('/Mealboxmanager').get(this.Mealboxmanager.GpGetAllValues);
app.route('/Mealboxmanager').post(this.Mealboxmanager.GpCreate);
     }

}