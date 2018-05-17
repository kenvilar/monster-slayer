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

			this.monsterAttacks();
		},
		specialAttack() {
			this.monsterHealth -= this.calculateDamage(10, 20);

			if (this.checkWin()) return;

			this.monsterAttacks();
		},
		heal() {
			console.log(this.playerHealth);
			if (this.playerHealth < 90) {
				this.playerHealth += 10;
			} else {
				this.playerHealth = 100;
			}
			this.monsterAttacks();
		},
		giveUp() {
			this.gameIsRunning = false;
			alert('You lost!');
			this.monsterHealth = this.playerHealth = 100;
		},
		monsterAttacks() {
			this.playerHealth -= this.calculateDamage(5, 12);

			this.checkWin();
		},
		calculateDamage(min, max) {
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},
		checkWin() {
			if (this.monsterHealth <= 0) {
				if (confirm('You won! New game?')) {
					this.startTheGame();
				} else {
					this.gameIsRunning = false;
				}

				return true;
			} else if (this.playerHealth <= 0) {
				if (confirm('You lost! New game?')) {
					this.startTheGame();
				} else {
					this.gameIsRunning = false;
				}

				return true;
			}

			return false;
		},
	},
});
