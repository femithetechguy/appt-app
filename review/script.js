// Select the confirm and edit buttons
const confirmBtn = document.getElementById('confirm-btn');
const editBtn = document.getElementById('edit-btn');
const messageDiv = document.getElementById('message');

// Event listener for the Confirm button
confirmBtn.addEventListener('click', () => {
    messageDiv.textContent = 'Appointment Confirmed!';
    messageDiv.classList.remove('hidden');
    messageDiv.style.color = 'green';
});

// Event listener for the Edit button
editBtn.addEventListener('click', () => {
    const newName = prompt('Edit Name:', document.getElementById('name').textContent);
    const newDate = prompt('Edit Date (YYYY-MM-DD):', document.getElementById('date').textContent);
    const newTime = prompt('Edit Time (e.g., 10:00 AM):', document.getElementById('time').textContent);
    const newService = prompt('Edit Service:', document.getElementById('service').textContent);

    if (newName) document.getElementById('name').textContent = newName;
    if (newDate) document.getElementById('date').textContent = newDate;
    if (newTime) document.getElementById('time').textContent = newTime;
    if (newService) document.getElementById('service').textContent = newService;

    messageDiv.textContent = 'Details Updated!';
    messageDiv.classList.remove('hidden');
    messageDiv.style.color = 'orange';
});
