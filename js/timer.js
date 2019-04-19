class Timer{

	constructor(container_id) {
		this.el_node = document.querySelector('#'+container_id);
		this.setControls();
		this.createClock();
		this.setInterval(15);
	}

	setControls() {

		this.el_node.insertAdjacentHTML('afterbegin', `
			<form action="" name="timer-controlls">
				<div class="form-controll">
					<input type="button" name="timer-set-15" value="15">
					<input type="button" name="timer-set-30" value="30">
					<input type="button" name="timer-set-45" value="45" class="active">
					<input type="button" name="timer-set-60" value="60">
					<input type="button" name="timer-start-btn" value="Start">
			</form>`
		);

		this.timer_form = this.el_node.querySelector('form');

		const time_control_els = this.timer_form.querySelectorAll('[name^="timer-set-"]');
		time_control_els.forEach((btn) => {
			btn.addEventListener('click', (e) => {
				var time_val = parseInt(e.target.value);
				this.setInterval(time_val);
			});
		});

		const start_btn = this.timer_form.querySelector('[name="timer-start-btn"]');
		start_btn.addEventListener('click', this.startTimer);
	}

	createClock() {
		this.el_node.insertAdjacentHTML('beforeend', `
			<div class="clock">
				${this.interval_length}
			</div>`
		);
	}

	setInterval(minutes) {
		this.interval_length = minutes;
	}

	startTimer() {
		console.log('start timer');
	}
}
