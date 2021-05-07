const newFormHandler = async (event) => {
    event.preventDefault();
    console.log("YOU CLICKED THE SAVE BUTTON");

    const title = document.querySelector('#addSubName').value.trim();
    const category = document.querySelector('#addSubCategory').value.trim();
    const next_payment = document.querySelector('#addSubNextPay').value.trim();
    const billing_cycle = document.querySelector('#addSubCycle').value.trim();
    const amount = document.querySelector('#addSubAmount').value.trim();
    const rating = document.querySelector('#addSubRating').value.trim();

    if (title && category && next_payment && billing_cycle && amount && rating) {
        const response = await fetch(`/api/subscriptions`, {
            method: 'POST',
            body: JSON.stringify({ title, category, next_payment, billing_cycle, amount, rating }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create subscription');
        }
    }
};

const delButtonHandler = async (event) => {
    event.stopPropagation();
    document.location.replace('/dashboard');
};

document
    .querySelector('.addSub-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('#deleteAdded')
    .addEventListener('click', delButtonHandler);