
let ExersiceBurnt
{
    "id":"id",
    "ExersiceType":[],// cardueo....
    "Exersicecalores"="number",//number of calories that exescis weaste it 
    "ExersiceTime"="number",
}


{
    let user = {
    "user_id": "number",
    "user_Name": "string",
    "user_age": "number",
    "USer_high": "number",
    "user_wight": "number",
    "user_gender": "string",
    "helth_state":[]
     },
    
    
  
     let meals = {
        "meal_id": "number",
        "meal_name": "string",
        "MealType_id": "number",
        "calories_id": "number",
     },
    
    
     //  Content of the meal
    let ContentOftheMeal = {
        "MealType_id": "number",
        "Breackfast": [],
        "Lunch":  [],
        "denner": [],
        "Snacks": [],
        "drinks": [],
    
    },
    //  Calories of each food in the meal
     let Calories = {
    
        "calories_id": "number",
        "Protien": "number",
        "fat": "number",
        "carpohedrat": "number"
    
    
     },
    
    // Exersice's calories burnt
    let Exersice's calories burnt = {
    
    "Exersice_id":"number",
    "Exersicecalores": ="number",//number of calories that exescis weaste it 
    "Exersice_Time": ="number",
    "ExersiceType_id": "number",
    "ExersiceEequipmen_id": "number",
    
    },
    
    
    
    let ExersiceType = {
        "ExersiceType_id": "number",
        "ExersiceType_name": []
    },
    
    let Exersice_equipment = {
    
        "ExersiceEequipmen_id": "number",
        "ExersiceEquipmen_name": []
    
    }
    
    let TargetCalories = {
        "TargetCalories_id": "number",
        "user_id": "number",
        "Target_Period": "string"
        "calories_id": "number",
    
    }
    
    let PerfectWeight = {
    
        "PerfectWeight_id": "number",
        "waistline": "number",
        "water_drinking_rate": [],
        "user_id": "number",
        "Exersice_id":"number",
        "calories_id": "number",
    
    
    }