const express = require('express');

const loginRoute = require('./routes/login.route');
const userRoute = require('./routes/user.route');
const categoryRoute = require('./routes/category.route');
const postRoute = require('./routes/post.route');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use(loginRoute);
app.use(userRoute);
app.use(categoryRoute);
app.use(postRoute);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
