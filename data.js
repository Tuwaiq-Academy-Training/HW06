meal={
    id_meal:'number',
    name_meal:'string',
}
//main database
{
    meals=[
        healthy:[meal],
        keto:[meal],
        dite:[meal],
        snacks:[meal]

    ]

    
}
Content_of_the_meal={
id_meal:'number',
id_content_meal:'number',
name_meal:'string',
meal_ingredients:'string',
descirption:'string',

}
Calories_of_each_food_in_the_meal={
    id_content_meal: 'number',
    protein:'number',
    fat:'number',
    carbs:'number'
}
Users_target_calories={
    id_user:'number',
    id_target:'number',
    gender:'string',
    brithday:'string',
    weigt:'number',
    height:'number',
    number_day_exercises:'number'
}
Exersice_calories_burnt={
    id_target:'number',
    id_exercises:'number',
    number_calories:'number',
    goal:'string'
}
//-----------------------------------------------------------------------------------
Repositorie={
    id='number',
    id_repo:'number',
    name_repo:'string',
    descirption:'string',
    type:'string'
}
Pull_requests={
    //id_repo:'number',
    id_pull:'number',
    name_pull:'string',
    id_branch:'string',
    title_pull:'string',
    descirption_pull:'string',
}
issues={
    id_repo:'number',
    id_issue:'number',
    title_issue:'string',
    descirption_issue:'string',
    label:'string',
    milestones:'string'//or [date]

}