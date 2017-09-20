var app = new Vue({
	el: '#app',
	data: {
		users: [
		{
			name: 'Juan-Francisco'
			,age: 27
			,photo: 'https://avatars3.githubusercontent.com/u/8474443?v=4&s=40'
			,editable: true
			,deletable: false

		},
		{
			name: 'Dog'
			,age: 0
			,photo: 'http://zoomiedogs.com/wp-content/uploads/dog-icon1.png'
			,editable: true
			,deletable: true
		}
		]
		
	},
	methods: {
		edit: function(){
			console.log('editing...');
		},
		remove: function(){
			console.log('removing...');
		},
		getJSON: function(user){
			console.log(JSON.stringify(user));
		}
	}
});