const appApplication = [
    Meals = {
        breakFast: [String],
        Launch: [String],
        Dinner: [String]
    },
    ContentOfTheMeal = {
        Protein: Number,
        Carbohydrates: Number,
        Fats: Number,
    },
    CaloriesOfEachFoodInTheMeal = {
        breakFast: [Number],
        Launch: [Number],
        Dinner: [Number]
    },
    TargetCalories = {
        UserTargetCalories: Number
    },
    ExerciseCalories = {
        Cardio: Number,
        Lifting: Number
    }
]

// --------------------------SECOND QUESTION------------------------------

const InHouseRepositories = [
    repos = {
        repositries: [repositries],
        repoName : String,
        PublicOrPrivate: Boolean,
        TypeOflanguage: String,
        numberOfForks: Number,
        updateTime: Date,
        favouriteStar: Boolean,
        pullRequests: Number
    },


    PullRequestsFuatures = {
        filters: [filters],
        // Filters:
        openIssuesAndPullRequests: String,
        yourIssues: String,
        yourPullRequests: String,
        everyThingAssignedToyou: String,

        // searchBar TextField
        SearchBar: String,

    
        labels:[labels],
        //  Labels:
        bug: String,
        ducomentaion: String,
        duplicate: Boolean,
        enhancement: String,
        helpWanted: Boolean,
        invalid: Boolean,
        question: String,
        wontfix: Boolean,

        
        milestones: [milestones],
        pullRequests: [pullRequests]
    },


    IssuesFeatures = {
        filters: [filters],
        // Filters:
        openIssuesAndPullRequests: String,
        yourIssues: String,
        yourPullRequests: String,
        everyThingAssignedToyou: String,

        // searchBar TextField
        SearchBar: String,

    
        labels:[labels],
        //  Labels:
        bug: String,
        ducomentaion: String,
        duplicate: Boolean,
        enhancement: String,
        helpWanted: Boolean,
        invalid: Boolean,
        question: String,
        wontfix: Boolean,


        milestones: [milestones],
        issues: [issues]
    }
]