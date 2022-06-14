


//******************** FOOD TRACKING APPLICATION************************

const foodtrackingapp = [
    Meals = {
        "Breakfast" : "String",
        "lunch": "string",
        "dinner": "String",
        "snacks": "String",
      
      
    },


    Contentofthemeal = {

        "protein": number,
        "fat": number,
        "fruits and vegtables": number,
        "bread and cereals": number,
        "milk,cheese & dairy": number,
    },
        
        Calories = {
            "Breakfast" : number,
            "lunch": number,
            "dinner": number,
            "snacks": number,
          
          
        },

       targetCalories = {
            "weight" : number,
            "hight": number,
            "target calories ": number,
            "snacks": number,
             "activity level":[]//high,moderate,low
          
        },

        Exersicecaloriesburnt = {
            "walking" : number,
            "running": number,
            "cycling": number,
            "rowing": number,
             "jump roping":snumber
          
        }
]
        //*************************************IN-HOUSE REPOSITORIES************************** 
        const  InHouseRepositories = [
            pullRequests={

        "pullRequests": [],// author name,date,title
        "Repositories":[],// repo info
        "author": "string",
        "label": [],//invalid ,question,bug,
        "project name":"string",
        "state": [],//public or private
        "sort": []//newest,oldest,most commented,recently update
            },

            Repositoriesforusersonly={

                "pullRequests":number,
                "fork":number,
                "name":"string",
                "state":[],//public or private
                "language":"string",
                "overview":"string"

            },


    IssuesFeatures = {
        "author": "string",
        "issue description":"string",
        "state":[],//open,closed
        "sort": [],//newest,oldest,most commented,recently update
        "label": []//invalid ,question,bug,

    
    }
]