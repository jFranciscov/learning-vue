Vue.component('technology-item', {
	props: ['technology'],
	template: '<li>{{ technology.name }}</li>'
});

var app = new Vue({
	el: '#app',
	data: {
		users: [
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
			,{id: 0, name: 'Nodejs'}
			,{id: 0, name: 'Express'}
			,{id: 0, name: 'MariaDB'}
			,{id: 0, name: 'Gulp'}
			,{id: 0, name: 'GIT'}
			,{id: 0, name: 'REST'}
			]
		}
		]
	},
	methods: {
		edit: function(user){
			user.editing = !user.editing;
		},
		remove: function(id){
			this.users.splice(id, 1);
		},
		getJSON: function(user){
			console.log(JSON.stringify(user));
		}
	},
	computed: {
		editButtonText: function(){
			return this.editing ? 'done' : 'edit';
		}
	}
});

