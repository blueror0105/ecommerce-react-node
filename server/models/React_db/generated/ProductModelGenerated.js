/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE ProductModelGenerated.js PLEASE EDIT ../ProductModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_React_db";
import Sequelize from "sequelize";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {

  // Start queries
    

  // CRUD METHODS


  /**
  * ProductModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    let result = await Database.getConnection().models.Product.create(item);    return result;
  },
  
  /**
  * ProductModel.delete
  *   @description CRUD ACTION delete
  *
  */
  async delete(id) {
    return await Database.getConnection().models.Product.destroy({ where: { _id: id } });
  },
  
  /**
  * ProductModel.get
  *   @description CRUD ACTION get
  *   @returns Product
  *
  */
  async get(id) {
    let result = await Database.getConnection().models.Product.findByPk(id);
    return result;
  },
  
  /**
  * ProductModel.list
  *   @description CRUD ACTION list
  *   @returns ARRAY OF Product
  *
  */
  async list() { 
    return await Database.getConnection().models.Product.findAll();
      },
  
  /**
  * ProductModel.update
  *   @description CRUD ACTION update
  *   @returns Product
  *
  */
  async update(item) { 
    let result = await Database.getConnection().models.Product.update(item, {
      where: { _id: item._id }
    });
    return result;
  },
  


};

export default generatedModel;
