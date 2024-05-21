const heartIcons = document.querySelectorAll('.heart-icon');

heartIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('liked');
    icon.classList.toggle('popped');
  });
});



// Select all the "plus-icon" and "minus-icon" buttons
const plusIcons = document.querySelectorAll('.plus-icon');
const minusIcons = document.querySelectorAll('.minus-icon');

// Add an event listener to each button
plusIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    // Find the corresponding quantity span and increment its value
    const quantitySpan = icon.parentElement.querySelector('.quantity');
    const quantity = parseInt(quantitySpan.textContent, 10);
    quantitySpan.textContent = quantity + 1;

    // Update the total price
    updateTotalPrice();
  });
});

minusIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    // Find the corresponding quantity span and decrement its value, but only if it's greater than 0
    const quantitySpan = icon.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantitySpan.textContent, 10);
    if (quantity > 0) {
      quantitySpan.textContent = quantity - 1;
      updateTotalPrice();
    }
  });
});

// Function to update the total price
function updateTotalPrice() {
  let totalPrice = 0;
  const unitPrices = document.querySelectorAll('.unit-price');
  const quantities = document.querySelectorAll('.quantity');

  // Calculate the total price by multiplying each unit price by its corresponding quantity
  unitPrices.forEach((price, index) => {
    const priceValue = parseFloat(price.textContent, 10);
    const quantityValue = parseInt(quantities[index].textContent, 10);
    totalPrice += priceValue * quantityValue;
  });

  // Update the total price span
  document.querySelector('.total').textContent = totalPrice + ' $';
}

// Add an event listener to each delete button
const deleteButtons = document.querySelectorAll('.fa-trash-alt');
deleteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove the corresponding item from the list
    const card = button.parentElement.parentElement.parentElement;
    card.parentElement.removeChild(card);

    // Update the total price
    updateTotalPrice();
  });
});