Vue.component('technology-item', {
	props: ['technology'],
	template: '<li>{{ technology.name }}</li>'
});

var users = new Vue({
	el: '#users',
	data: {
		users: []
	},
	created: function(){
		var self = this;
		axios.get('http://localhost:3000/api/users').
		then(function(response){
			self.users = response.data;
		});
	},
	methods: {
		edit: function(user){
			if(user.editing){
				axios.put('http://localhost:3000/api/user/' + user.id, user).
				then(function(){
					alert('successfully edited!');
				});
			}
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

