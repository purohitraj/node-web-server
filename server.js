const express = require('express');
const hbs = require('hbs');
var app = express();

const port = process.env.PORT || 3000; 
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (name) => {
	return name.toUpperCase();
});

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
	res.send('hello world');

});

app.get('/about',(req,res)=>{
	res.render('about.hbs',{
		title:'Raj',
	});

});

app.listen(port,()=>{
	console.log(`server is on ${port}`);
});