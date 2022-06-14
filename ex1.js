

user={
    
    "user_id":Number,
    "user_name":String,
    "email":String,
    "password":String,
    "phone":Number,
    "weight": Number,
    "height": Number,
    "age": Number,


},
meals={
    
    "meal_id":Number,
    "BreakFast":String,
    "Lunch":String,
    "Dinner":String,
    "Snack":String,
    "Drink":String,
},
contentOfTheMeal={
    "meal_id":Number,
    "calories":Number,
    "protein":Number,
    "carbs":Number,
    "sugar":Number,
},
caloriesOfEachFoodInTheMeal={
    "meal_id":Number,
    "calories":Number,
    "protein":Number,
    "carbs":Number,
    "sugar":Number,
},
userTargetCalories={
    "user_id":Number,
    "meal_id":Number,
    "Targetcalories":Number,
    "Remainingcalories":Number,
},
exersiceCaloriesBurnt={
    "user_id":Number,
    "exercise":String,
    "caloriesburnet":Number,
}
