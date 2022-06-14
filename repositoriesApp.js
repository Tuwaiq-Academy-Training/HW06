user:{
  'id'=Number,
  'name'=String,
  'eamil'=eamil 
}

commit:{
    'id'=Number,
    'message'=String,
    'size'=Number
}

pullrequset:{
   'id'=Number,
   'userId'=[user],
   'commitId'=[commit]
}

repositry:{
     'users'=[user],
     'id'=Number,
     'num-fileDelete'=Number,
     'num-fileEmty'=Number,
     'brnashes'=Number,
     'date'=Number,
     'pullRequset'=[pullrequset],
     'comit'=[commit]
}