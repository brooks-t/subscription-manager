const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#addSubName').value.trim();
    const category = document.querySelector('#addSubCategory').value.trim();
    const payment = document.querySelector('#addSubNextPay').value.trim();
    const cycle = document.querySelector('#addSubCycle').value.trim();
    const amount = document.querySelector('#addSubAmount').value.trim();
    const rating = document.querySelector('#addSubRating').value.trim();

    if (name && category && payment && cycle && amount && rating) {
        const response = await fetch(`/api/subscriptions`, {
            method: 'POST',
            body: JSON.stringify({ name, category, payment, cycle, amount, rating }),
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
    document.location.replace('/dashboard');
};

document
    .querySelector('.addSub-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.addSub-form')
    .addEventListener('click', delButtonHandler);