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

			this.monsterHealth -= this.calculateDamage(min, max);

			if (this.checkWin()) return;

			this.playerHealth -= this.calculateDamage(min, max);

			this.checkWin();
		},
		specialAttack() {

		},
		heal() {

		},
		giveUp() {

		},
		calculateDamage(min, max) {
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},
		checkWin() {
			if (this.monsterHealth <= 0) {
				if (confirm('You won! New game?')) {
					this.gameIsRunning = false;
					this.playerHealth = this.monsterHealth = 100;
				} else {
					this.gameIsRunning = false;
				}

				return true;
			} else if (this.playerHealth <= 0) {
				if (confirm('You lost! New game?')) {
					this.gameIsRunning = false;
					this.playerHealth = this.monsterHealth = 100;
				} else {
					this.gameIsRunning = false;
				}

				return true;
			}

			return false;
		}
	},
});
