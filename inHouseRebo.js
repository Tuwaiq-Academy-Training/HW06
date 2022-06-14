user={
"id":number ,
"name":"string",
"email":"string",
"password":number

}
rebository={
    "userId":"string",
    "rebo_Id":number,
    "rebo_name":[string],
    "pull_Requests":[{
            "labels":[string],
            "milstones":[string]
    }]

}
"pull_Requests"={
    "author":[string],
    "label":[string],
    "project":[string],
    "Milestones":[string],
    "Reviews":[

                "noreviews",
                "reviewrequired",
                "approvedReview",
                "changesRequested",
                "reviewedByYou",
             
],
    "Assignee":[string],
    "Sort ":[{

        "newest":[string],
        "oldest":[string]
    }
    ],

    "visibility":[{
        public:[rebository],
        private:[rebository]
    }]
}
issues={
    "Sort ":{

        "newest":[string],
        "oldest":[string]
    },
    "visibility":{
        public:[rebository],
        private:[rebository]
    }
}