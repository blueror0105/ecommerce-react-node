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
 *  TO CUSTOMIZE FUNCTIONS IN CategoryActionsGenerated.js PLEASE EDIT ../CategoryActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import CategoryApi from "../../../api/CategoryApi";

let actionsFunction = {

  //CRUD METHODS

  // Get category
  loadCategory: function(id) {
    return function(dispatch) {
      return CategoryApi
        .getOneCategory(id)
        .then(category => {
          dispatch(actionsFunction.loadCategorySuccess(category));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadCategorySuccess: function(category) {
    return { type: types.GET_CATEGORY_SUCCESS, payload: category };
  },

  // Load  list
  loadCategoryList: function() {
    return function(dispatch) {
      return CategoryApi
        .getCategoryList()
        .then(list => {
          dispatch(actionsFunction.loadCategoryListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadCategoryListSuccess: function(list) {
    return { type: types.LIST_CATEGORY_SUCCESS, payload: list };
  },


};

export default actionsFunction;
