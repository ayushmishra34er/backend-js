
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "ayushmishra34er",
  "id": 218459765,
  "node_id": "U_kgDODQVudQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/218459765?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ayushmishra34er",
  "html_url": "https://github.com/ayushmishra34er",
  "followers_url": "https://api.github.com/users/ayushmishra34er/followers",
  "following_url": "https://api.github.com/users/ayushmishra34er/following{/other_user}",
  "gists_url": "https://api.github.com/users/ayushmishra34er/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ayushmishra34er/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ayushmishra34er/subscriptions",
  "organizations_url": "https://api.github.com/users/ayushmishra34er/orgs",
  "repos_url": "https://api.github.com/users/ayushmishra34er/repos",
  "events_url": "https://api.github.com/users/ayushmishra34er/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ayushmishra34er/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Ayush Mishra",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 13,
  "public_gists": 0,
  "followers": 2,
  "following": 1,
  "created_at": "2025-06-29T10:34:24Z",
  "updated_at": "2026-07-21T10:39:27Z"
}


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("hello ayush what are you doing today")
})

app.get('/login', (req, res) => {
    res.send('<h1> this is the login page</h1>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, ()=>{
    console.log(`
        example app listening on port ${port}`)
} )