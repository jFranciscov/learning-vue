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
			,photo: 'http://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg'
			,editable: true
			,deletable: true
		}
		]
		
	}
});