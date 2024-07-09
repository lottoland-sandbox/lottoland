function validateCode() {
            const code = document.getElementById('promoCode').value;
            const errorMessage = document.getElementById('errorMessage');
            if (code.toUpperCase() === 'MIKE') {
                errorMessage.style.display = 'none';
                alert('Code redeemed successfully!');
            } else {
                errorMessage.style.display = 'block';
            }
        }

 function showPromoContainer() {
            document.getElementById('promo-container').style.display = 'block';
            document.getElementById('promo-link').style.display = 'none';
        }

        function hidePromoContainer() {
            document.getElementById('promo-container').style.display = 'none';
            document.getElementById('promo-link').style.display = 'flex';
        }

 function resetForm() {
            document.getElementById('promoCode').value = '';
            document.getElementById('errorMessage').style.display = 'none';
        }

    // Function to show notification 50% of the time
        function showNotification() {
            const shouldShow = Math.random() < 0.2;
            if (shouldShow) {
                document.getElementById('notification').style.display = 'flex';
            }
        }
