//we need sigup then sigin and know info about user 
let user={
"_id_user":number,
"name":"string",
"age":number,
"gender":"string",
"weight":number,
"height":number,
"fat_percentage":number
}
//each meal has id and type _meal 
let meal={
    "_id_meal":number,
    "type_meal":
    "[breakfast:{name_of_the_meal:[<string>]},brunch:{name_of_the_meal:[<string>]},lunch:{name_of_the_meal:[<string>]},snack:{name_of_the_meal:[<string>]},dinner:{name_of_the_meal:[<string>]}"
}
//
let content_of_meal={
    "_id":number,
    "_id_meal":number,
    "content_of_meal":"[<string>]"
}
//each meal has how many calories?
let Calories_of_each_food_in_the_meal={
    "_id_meal":number,
    "calories":number
}
//here we need know when When did we cross the target?
let user_target_calories={
    "id_user":number,
    "id_meal":number,
    "target_calories":{$or:[{fat_percentage:{$gt:number}},{calories:{$gt:number}}]}
}
let Exersice_calories_burnt={
    "id_user":number,
    "exersice":{fat_percentage:{$gt:number}}
}