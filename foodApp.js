let calories_Counter_App=[{
    //Each user has one account (1-1)
     login_signup:{getUserName:"string",
                    getEmail:"string",
                    getPassWord:"string",
                    login_attempt:"boolean",
                    signup_status:"boolean",
                    user_id: "number"},
    //Many meals have Many users(M-M) 
    meals_information:{meals_id:"number",
                     user_id: "number",
                     meals_number:"number",
                     meals_name:"string",
                     meals_content:"string",
                     meals_calories:"number" },
 //each user has MANEY meals(1-M)
     users_information:{user_id: "number",
                        meals_id:"number",
                        user_weight:"number",
                        user_height:"number",
                        user_age:"number" ,
                        user_health:"boolean"},

    
    //calculate calories of meals for each user & how much the user burn calories.
    user_target:{target_Calorie:{
                                 user_id: "number",
                                 meals_id:"number",
                              calculate_burn_calories:{meals_quantity:{meals_id:"number",
                                                                       meals_content:"string"}}}}}]