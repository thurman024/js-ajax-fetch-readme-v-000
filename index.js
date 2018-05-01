const app = "I don't do much.";
const token = 'c4dcfba8dfc4c6f0a420a68a3d18a07581a7442f'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
