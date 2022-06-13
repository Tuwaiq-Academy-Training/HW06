// Repositories for users only
let userrepostry
{
    "id"="id",
    "path"="string",
    "name"="string",
    "clone-url" =[],
    "login"="string",


}


// Pull requests (with their features) on each Repo

pullrequest
 {
     "id"= "number",
     "title"="string",
     "username"="string",
     "repostry-id"="number",

}


pullrequest-status
{
    "id"="number",
    "state"="string",
    "total-count"="status",
    "status"="status",
    "base"="pull_reqest_ref",
    "head"="pull_reqest_ref",
}

 let status 
{
  "id"="number",
  "state"= "string",
  "url"="String",
  "target-url"="String",
  "context"="string",
  "descreption"="string",
  "createed-at"="string",
  "update-at"="string",
}




// Issues (with their features) on each Repo

let Issues
{
    "id"="id",
    "number"="number",
    "title"="string",
    "updated-at"="string",

}