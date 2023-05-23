const calendarBodyEl = document.querySelector('.js-calendar-body');
let prevCalendarItemEl = null;

const onCalendarItemElClick = event => {
  const calendarItemEl = event.target;

  // Ця перевірка відсікає порожні комірки.
  if (calendarItemEl.textContent === '') {
    return;
  }

  // Перевірка на те, що попередній і поточний елемент, це один й тей самий елемент.
  if (prevCalendarItemEl === calendarItemEl) {
    calendarItemEl.classList.toggle('active');
    return;
  }

  // Перевірка на те, що це вже не перший клік.
  if (prevCalendarItemEl !== null) {
    prevCalendarItemEl.classList.remove('active');
  }

  calendarItemEl.classList.add('active');
  prevCalendarItemEl = calendarItemEl;
};

calendarBodyEl.addEventListener('click', onCalendarItemElClick);
