"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/*
const logger = (req, res, next) => {
    console.log('Logging...');
    next();
};
app.use(logger);
*/

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.locals.someVariable = 'someVariable';
    next();
});

const users = [
    {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        eMail: 'john.doe@gmail.com'
    },
    {
        id: '2',
        firstName: 'John-21',
        lastName: 'Doe-2',
        eMail: 'john.doe.2@gmail.com'
    },
    {
        id: '3',
        firstName: 'John-3',
        lastName: 'Doe-3',
        eMail: 'john.doe.3@gmail.com'
    },
    {
        id: '4',
        firstName: 'John-4',
        lastName: 'Doe-4',
        eMail: 'john.doe.4@gmail.com'
    }
];

app.get('/', (req, res) => {
    const title = 'Customers';

    res.render('index', {
        title,
        users
    });
});

app.post('/users/add', (req, res) => {
    const newUser = {
        name: req.body.name,
        lastName: req.body['last name'],
        email: req.body.email
    };

    res.render('index', {title: 'success!!', users});

    console.log(newUser);

});

/*
const people = [
    {
        name: '1',
        age: 0
    },
    {
        name: '2',
        age: 0
    },
    {
        name: '3',
        age: 0
    }
];

app.get('/', (req, res) => {
    res.json(people);
});
*/

app.listen(3000, () => console.log('server started'));
