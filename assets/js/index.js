let vm = new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
	},
	methods: {
		startTheGame() {
			this.gameIsRunning = true;
			this.playerHealth = this.monsterHealth = 100;
		},
		attack() {
			let max = 10;
			let min = 3;
			let damage = Math.max(Math.floor(Math.random() * max) + 1, min);
			this.monsterHealth -= damage;

			if (this.monsterHealth <= 0) {
				alert('You won!');
				this.gameIsRunning = false;
				return;
			}

			damage = Math.max(Math.floor(Math.random() * max) + 1, min);
			this.playerHealth -= damage;

			if (this.playerHealth <= 0) {
				alert('You lost!');
				this.gameIsRunning = false;
			}
		},
		specialAttack() {

		},
		heal() {

		},
		giveUp() {

		},
	},
});
