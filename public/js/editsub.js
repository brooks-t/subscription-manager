const editFormHandler = async (event) => {
    
    event.preventDefault();

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const title = document.querySelector('#editSubName').value.trim();
        const category = document.querySelector('#editSubCategory').value.trim();
        const next_payment = document.querySelector('#editSubNextPay').value.trim();
        const billing_cycle = document.querySelector('#editSubCycle').value.trim();
        const amount = document.querySelector('#editSubAmount').value.trim();
        const rating = document.querySelector('#editSubRating').value.trim();

        if (title && category && next_payment && billing_cycle && amount && rating) {
            const response = await fetch(`/api/subscriptions/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ title, category, next_payment, billing_cycle, amount, rating }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Failed to edit subscriptions');
            }
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/subscriptions/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete subscription');
        }
    }
};

document
    .querySelector('.editSub-form')
    .addEventListener('submit', editFormHandler);

document
    .querySelector('#deleteEdited')
    .addEventListener('click', delButtonHandler);
