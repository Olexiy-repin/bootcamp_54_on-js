const timer = {
  deadline: new Date('2023-05-31 00:00:00'),
  intervalId: null,
  refs: {
    days: document.querySelector('.js-timer__days'),
    hours: document.querySelector('.js-timer__hours'),
    minutes: document.querySelector('.js-timer__minutes'),
    seconds: document.querySelector('.js-timer__seconds'),
  },

  start() {
    this.intervalId = setInterval(() => {
      const diff = this.deadline - Date.now();

      if (diff <= 0) {
        this.stop();

        return;
      }

      let { days, hours, minutes, seconds } = this.getTimeComponents(diff);

      this.refs.days.textContent = this.pad(days);
      this.refs.hours.textContent = this.pad(hours);
      this.refs.minutes.textContent = this.pad(minutes);
      this.refs.seconds.textContent = this.pad(seconds);

      this.refs.days.dataset.title = this.declensionNum(days, ['день', 'дні', 'днів']);
      this.refs.hours.dataset.title = this.declensionNum(hours, ['година', 'години', 'годин']);
      this.refs.minutes.dataset.title = this.declensionNum(minutes, [
        'хвилина',
        'хвилини',
        'хвилин',
      ]);
      this.refs.seconds.dataset.title = this.declensionNum(seconds, [
        'секунда',
        'секунди',
        'секунд',
      ]);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
  },

  getTimeComponents(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  },

  pad(value) {
    return String(value).padStart(2, '0');
  },

  declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  },
};

timer.start();

/*
['день', 'дні', 'днів']
['година', 'години', 'годин']
['хвилина', 'хвилини', 'хвилин']
['секунда', 'секунди', 'секунд']
*/
