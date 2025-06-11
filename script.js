const radioButtons = document.querySelectorAll('input[name="unit"]');
const totalDisplay = document.getElementById('total');

const prices = {
    1: 10,
    2: 18,
    3: 24
};

const selectorsMap = {
    1: document.getElementById('selectors-1'),
    2: document.getElementById('selectors-2'),
    3: document.getElementById('selectors-3'),
};

// Get all label containers for options
const optionLabels = document.querySelectorAll('.option');

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        const selected = radio.value;

        // Hide all dropdowns
        Object.values(selectorsMap).forEach(sel => sel.classList.add('hidden'));
        // Show only selected dropdowns
        selectorsMap[selected].classList.remove('hidden');

        // Remove .selected from all options
        optionLabels.forEach(label => label.classList.remove('selected'));

        // Add .selected to the currently selected one
        radio.closest('label').classList.add('selected');

        // Update total
        totalDisplay.textContent = `$${prices[selected].toFixed()} USD`;
    });
});