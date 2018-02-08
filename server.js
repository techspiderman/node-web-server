const express = require('express');
const hbs = require('hbs');
var app = express();  //create server
hbs.registerPartials(__dirname + '/views/partials'); //partials are template such as header or footers
hbs.registerHelper('getCurrentYear', () => { return new Date().getFullYear();});
hbs.registerHelper('getTitleName',(name, welcomeMessage) => { return 'hello ' + name + welcomeMessage;}) ;
app.use(express.static(__dirname + '/public' )); //__dirname gets passed on from node wrapper function
//sets public direcotry  - uses express middleware

app.get('/', (req,res) => {

							res.render('home.hbs',{pageTitle:'my my page',year: new Date().getFullYear(),welcomeMessage: 'welcome to my website'});
						}
	 	);

app.get('/about', (req,res) => {
									//res.send ('About this page');
									res.render('about.hbs',{pageTitle:'my my page',year: new Date().getFullYear(),welcomeMessage: 'welcome to my website'});
								}

	 	);

app.get('/bad', (req,res) => {
									res.send(
												{errorMsg: 'Unable to hand request'}
											);

							}

		);

app.listen(2000, () => {console.log('Starting up server');});