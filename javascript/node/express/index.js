const express = require('express')
const crypto = require("crypto")
const { promisify } = require('node:util')

const app = express()
let users = {
  matt: {
    salt: "10",
    hash: "7e7a1629fd0639713e307a053ad0656ef3009e4ddbdfa97e1be8441df71bac504aa4ab67038905ee31ed59eb7ef2924f650bc67b2c7a2c37c319660ada0cd7382ff712fe96c8a05489693be70833b98690c1c67e552e1956bcf17405da42b42fb10276ed67efd3521d73286057075acbd9ef03f3ad895219e5b9281a9623404b4b8607044bb719c83b01435b8c5d5cd8327b3b59702098b89f750207c711e239a47859b45418ebeacd55a6bf52f9e177ce1bca35629cb0435bd7ed17f29a3c98fa912316dea306b05436da3a937f0367c00b8e5aac2721e0a5cf297f8a96be558fde16b0f5f0c1079564ace5bca5cbfb70429e1f7729678c99011cef2ceaa06dc294970e468dd0d31a5aa72888c5bdceec7e191326ae1bc4e38752c32f1cb14a655c33ce4af49a96a8568f791b69b5e2c4e5fd3154dc80aef9ac3b27e63c2e26efabadb3dfee296f9c232784ba0495e57a1ec951db4feda8327b5595770fa1c2ea9dc9cbadf08e9ddcdcca4d696a339f5c40c1284aebe065b273e8e66e74104ca9517dd07fc066615713417ee566e36fcf46df301f13ee92e637e89f2d0ef23f3f0092c01d742ae2f27762ea84f521ec78aecba73a8435c4f7103acb8818591029a476a33ad3255b1bfe3ebfbac18247d08d5b3d5edf555b6a0e0db650244c7a93070afbc14d96359299415e29be16aaa3d53cf5bce3ce0a2d325fbc55d88380"
  }
}

app.get('/newUser', (req, res) => {
  let username = req.query.username || '';
  const password = req.query.password || '';

  username = username.replace(/[!@#$%^&*]/g, '');

  if (!username || !password || users[username]) {
    return res.sendStatus(400);
  }

  const salt = crypto.randomBytes(128).toString('base64');
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512');

  users[username] = { salt, hash };

  res.sendStatus(200);
});


app.get('/auth', async (req, res) => {
  let username = req.query.username || '';
  const password = req.query.password || '';
  username = username.replace(/[!@#$%^&*]/g, '');
  if (!username || !password || !users[username]) {
    return res.sendStatus(400);
  }

  const { salt, hash } = users[username];
  const encryptHash = promisify(crypto.pbkdf2);
  const h = await encryptHash(password, salt, 10000, 512, 'sha512')
  const a = Buffer.from(hash, 'hex')
  // console.log(encryptHash.toString('hex'))
  // res.sendStatus(200)
  if (crypto.timingSafeEqual(a, h)) {
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

app.listen(3000, () => {
  console.log("start the server")
})
