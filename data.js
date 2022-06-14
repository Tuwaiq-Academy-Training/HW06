const TrackingApp=[

meals ={


    mealsId:'Number',// one to many
    Mname:'String', //
    Mkind:[String]//"breakfast,dinner,lunch"// one -to- many
},
 content={
    mealsId:'Number',   
    Mname:'String',     
    protein:'Number'  , //66
    fats:'Number',     //41
    carbohydrate:'Number', //4
    Calories:'Number' //786

},

 calories={
    //Calories of each food in the meal
    Mkind: [String]//"breakfast,dinner,lunch"// one -to- many

    
},
 UserTargCalories={

    userID:'Number',
    userName:'String',
    userTargetCalories:'Number'

},

 ExersiceCaloriesBurnt={
    walking:'Number',
    swimming:'Number',
    cardio:'Number',
    cycling:'Number'
}]
////////////////////////// Q2: in-house repositories//////////////////////////////

const HouseRepositories=[

 user ={
    userName:"String",
    userEmail:"String",
    userPassword:"String",
},

 userRepositories={
// for user only
     
    repositoriesName:'String',
    pullRequests:'Number',
    update:[date],
    favourite:'String',
    state :[]// pri - pub 
    
},
 pullReqFeatures={

    state :[],
    sort:[],
    pullRequests:'Number',
     title:'String'
},
Issues={
    state :[],
    sort:[],
    title_iss: 'String',
    


}
]