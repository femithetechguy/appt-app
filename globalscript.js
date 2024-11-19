// script.js
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Create a new list item
    const appointmentItem = document.createElement('li');
    appointmentItem.textContent = `${name} (${email}) - ${date} at ${time}`;

    // Add a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Cancel';
    deleteButton.addEventListener('click', function () {
        appointmentItem.remove();
    });
    appointmentItem.appendChild(deleteButton);

    // Add the item to the appointments list
    document.getElementById('appointmentsList').appendChild(appointmentItem);

    // Clear the form
    document.getElementById('bookingForm').reset();
});
