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
 *  TO CUSTOMIZE CategoryModelGenerated.js PLEASE EDIT ../CategoryModel.js
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
  * CategoryModel.get
  *   @description CRUD ACTION get
  *   @returns Category
  *
  */
  async get(id) {
    let result = await Database.getConnection().models.Category.findByPk(id);
    let categoryproduct = await result.getCategoryproduct({ raw: true });
    result.dataValues.categoryproduct = categoryproduct.map(item => item._id);
    
    return result;
  },
  
  /**
  * CategoryModel.list
  *   @description CRUD ACTION list
  *   @returns ARRAY OF Category
  *
  */
  async list() { 
    return await Database.getConnection().models.Category.findAll();
      },
  


};

export default generatedModel;
