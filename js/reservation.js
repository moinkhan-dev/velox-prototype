const dateInput = document.getElementById('res-date');
if (dateInput) {
  dateInput.min = new Date().toISOString().split('T')[0];
}

const reservationForm = document.getElementById('reservation-form');
if (reservationForm && reservationForm.action.includes('YOUR_FORM_ID')) {
  reservationForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Reservation form needs setup. Contact the owner to reserve.');
  });
}
