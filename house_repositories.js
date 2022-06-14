//we need signup and signin for each user
let user={
    "_id":number,
    "email":"string",
    "username":"string",
    "password":"string"
}
//each user has account can add one or many repositories 
let repo={
    "_id_repo":number,
    "_id_user":number,
    "username":"string",
    "name_repo":"string",
    "link":"string"

}
// the user can take files  from other user and add or update on the files then pull request 
let pull_request={

   "_id_user":number,
   "username":"string",
    "link_repo":"string"
    
}
//we can ask the user what are the features? of working improvment
let features={
    "_id_feature":"string",
    "type_feature":"[string]",
    "description_feature":"[string]"
}
//we can ask the user what are the issues? of working improvment

let issues={
    "_id_issues":"string",
    "type_issues":"[string]",
    "description_issues":"[string]"
}