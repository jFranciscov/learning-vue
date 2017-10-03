var express = require('express'),
bodyParser 	= require('body-parser')
path = require('path');

var app = express();

app.set('port', 3000);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/users', function(req, res){
	console.log('=> GET | users');
	console.log(JSON.stringify(users));
	res.send(users);
});

app.put('/api/user/:id', function(req, res){
	// var user = users.filter(item => {
	// 	return item.id = req.params.id;
	// });
	// user = req.body;
	// res.status(500).send('Ha ocurrido un error');

	//edit user
	res.end();
});

app.listen(app.get('port'), function () {
	console.log('Servidor corriendo');
});

var users = [
{
	id: 0
	,name: 'Juan-Francisco'
	,age: 27
	,photo: 'https://avatars3.githubusercontent.com/u/8474443?v=4&s=40'
	,position: 'Frontend Developer'
	,editable: true
	,editing: false
	,deletable: false
	,technologies: [
	{id: 0, name: 'HTML'}
	,{id: 1, name: 'CSS'}
	,{id: 2, name: 'Javascript'}
	,{id: 3, name: 'Vue.js'}
	,{id: 4, name: 'Bootstrap'}
	,{id: 5, name: 'GIT'}
	,{id: 6, name: 'REST'}
	]

},
{
	id: 1
	,name: 'Dog'
	,age: 0
	,photo: 'http://zoomiedogs.com/wp-content/uploads/dog-icon1.png'
	,position: 'Backend Developer'
	,editable: true
	,editing: false
	,deletable: true
	,technologies: [
	{id: 0, name: 'Javascript'}
	,{id: 0, name: 'Node'}
	,{id: 0, name: 'Gulp'}
	,{id: 0, name: 'Express'}
	,{id: 0, name: 'MariaDB'}
	,{id: 0, name: 'GIT'}
	,{id: 0, name: 'REST'}
	]
}
];