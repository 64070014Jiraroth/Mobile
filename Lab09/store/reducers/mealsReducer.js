import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/mealsAction";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            
            const updatedFavoriteMeals = [...state.favoriteMeals];
            // const favIndex = updatedFavoriteMeals.findIndex((mealId) => {mealId === action.mealId}); //มีปีกกาไม่ได้ ??
            const favIndex = updatedFavoriteMeals.findIndex((mealId) => mealId === action.mealId);

            if (favIndex === -1) {
                updatedFavoriteMeals.push(action.mealId);
                console.log('push', updatedFavoriteMeals);
                console.log('favIndex', favIndex);
            }
            else {
                updatedFavoriteMeals.splice(favIndex, 1);    //.splice(เริ่มลบ, จำนวนที่ลบ)
                console.log('splice');
            }
            return {
                ...state,
                favoriteMeals: updatedFavoriteMeals, // เอาค่าใหม่ไปแทนที่
            };

        default:
            return state;
    }
}

export default mealsReducer;