// Repositories for users only
    let repository={
    "id": "number",
    "missing": "string",
    "path": [],
    "Oursys_repository_id": "number"
     },

// new repository for our hosting files
     let Oursys_repository={
        "id": "number",
        "name": "string",
        "clone_url": [],
        "private": "number",
        "html_url": [],
        "owner_id": "number",
        "partner_id": "number",
     },

// owner of the repo
     let Owner={
        "id": "number",
        "login": []
        "endpoint": "string",
     },

// to connect between user and repo
     let connection={
        "id": "number",
        "user_id": "number"
        "Oursys_repositor_id": "number"
     },

// user will use the repo
     let user={
         "id": "number",
         "name": "string",
         "login": "string",
         "email": "string",
         "endpoint": "string",
         "avatar_url": "string"
     },
// puul request collection
     pull_request={
         "id": "number",
         "number": "number",
         "titel": "string",
         "auther": "string",
         "base": [],
         "head": [],
         "create_at": "date"
         "Oursys_repositor_id": "number"

     }, 

     let partner_request_ref={
         "ref": "string",
         "repository_id": "number",
     },


    //  help to stores in this collection status count
     let pull_request_status={

        "id": "number",
        "state": "staring",
        "total_count": "number",
        "statuses": [],
        "pull_request": "number" 
     },


// the status in the pull request

       let status={
           "id": "number",
           "state": "string",
           "url": "string",
           "target_url": "string",
           "context": "string",
           "description": "string",
           "created_at": "date",
           "updated": "date"

       }


    //  this collection for the issue
  let issue={
    "id": "number",
    "number": "number",
    "title": "string",
    "update_at": "date",
    "Oursys_repository_id": "number",
  }

