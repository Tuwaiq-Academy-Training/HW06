let users={
    "_id" :number,
    "name" :string,
    "email":string,
    "pass":string,
    "repoID":number,
    
};
let repositories={
    "_id" :number,
    "name" :string,

}
let pullRequests={
    "_id" :number,
    "userID":number,
    "repoID":number,
};
let issues={
    "_id" :number,
    "issueName":string,
    "userID":number,
    "repoID":number,
    "pullID":number
};
