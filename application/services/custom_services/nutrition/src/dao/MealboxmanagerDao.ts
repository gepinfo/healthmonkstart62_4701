import * as mongoose from 'mongoose';
import MealboxmanagerModel from '../models/Mealboxmanager';
import { CustomLogger } from '../config/Logger'


export class MealboxmanagerDao {
    private Mealboxmanager = MealboxmanagerModel;
    constructor() { }
    
    public async GpDelete(MealboxmanagerId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into MealboxmanagerDao.ts: GpDelete');

    

    
    
    
    this.Mealboxmanager.findByIdAndRemove(MealboxmanagerId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from MealboxmanagerDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(MealboxmanagerData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into MealboxmanagerDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(MealboxmanagerData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.Mealboxmanager.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from MealboxmanagerDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(MealboxmanagerData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into MealboxmanagerDao.ts: GpSearchForUpdate');

    

    
    
    
    this.Mealboxmanager.findOneAndUpdate({ _id: MealboxmanagerData._id }, MealboxmanagerData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from MealboxmanagerDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(MealboxmanagerData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into MealboxmanagerDao.ts: GpUpdate');

    

    
    
    
    this.Mealboxmanager.findOneAndUpdate({ _id: MealboxmanagerData._id }, MealboxmanagerData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from MealboxmanagerDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(MealboxmanagerId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into MealboxmanagerDao.ts: GpGetNounById');

    

    
    
    
    this.Mealboxmanager.findById(MealboxmanagerId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from MealboxmanagerDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into MealboxmanagerDao.ts: GpGetAllValues');

    

    
    
    
    this.Mealboxmanager.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from MealboxmanagerDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(MealboxmanagerData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into MealboxmanagerDao.ts: GpCreate');

    let temp = new MealboxmanagerModel(MealboxmanagerData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from MealboxmanagerDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}