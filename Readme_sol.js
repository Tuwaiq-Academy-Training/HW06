// ## Food Tracking Application

// Meals
// Content of the meal
// Calories of each food in the meal
// User's target calories
// Exersice's calories burnt

const food = {
  _id: "ObjectID",
  name: "string",
  quantity: "number",
  calories_per_food: "number",
  timestamp: "number",
};

const meal_types = {
  _id: "ObjectID",
  name: "string",
  timing: "string",
  total_calories: "string",
  foods: [food],
  date: "date",
};

const user_info = {
  _id: "ObjectID",
  username: "string",
  password: "string",
  target_weight: "number", //optional
  profile_pic: "string", //optional
};

const user = {
  _id: "ObjectID",
  target_calories: "number",
  meals: [meal_types],
  user_id: "ObjectID",
};
const main_database = [
  //main database
  user_info,
  user,
];

// ## In-House Repositories

// Repositories for users only
// Pull requests (with their features) on each Repo
// Issues (with their features) on each Repo

const git_user = {
  _id: "ObjectID",
  email: "string",
  username: "string",
  user_info:user_info,
  password: "string", //optional
  oauth_token: "string", //optional
  repos: [repos_id],
  contributions: { issues: [issues], PRs: [pull_requests], comments: [string] },
};

const issues = {
  _id: "ObjectID",
  repo_id: "ObjectID",
  author: user,
  title: "string",
  description: "string", //optional
  comments: [string],
  status: "Boolean",
  contributors: [user],
  labels: [string],
  create_at: "date",
  updated_at: "date",
};

const pull_requests = {
  _id: "ObjectID",
  repo_id: "ObjectID",
  author: user,
  title: "string",
  description: "string", //optional
  files: [files],
  comments: [string],
  status: 'string',
  commits: [git_commits],
  contributors: [user],
  labels: [string],
  create_at: "number",
  updated_at: "number",
};

const Repos = {
  _id: "ObjectID",
  title: "string",
  description: "string",
  creator: user,
  contributors: [user],
  pull_requests: [pull_requests],
  issues: [issues],
  files: [files],
  commits: [git_commits],
  branchs: [git_branches],
  type: "string",
  stars: "number",
  forks: "number",
  created_at: "number",
  updated_at: "number",
  tags:[string]
};
//main database
const main_db = [users, Repos];
