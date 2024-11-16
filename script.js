document.getElementById('pay-now').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value * 100; // Paystack accepts amount in kobo

    if (!name || !email || !amount) {
        alert('Please fill in all fields.');
        return;
    }

    const handler = PaystackPop.setup({
        key: "pk_test_0cfb345bdaa919543ee61eb593e4f0efe8ce2ef0",
        email: email,
        amount: amount,
        currency: 'GHS',
        metadata: {
            custom_fields: [
                {
                    display_name: "Donor Name",
                    variable_name: "donor_name",
                    value: name
                }
            ]
        },
        callback: function (response) {
            alert('Thank you for your donation! Transaction reference: ' + response.reference);

        },
        onClose: function () {
            alert('Transaction was not completed. Please try again.');
        }
    });

    handler.openIframe();
});
