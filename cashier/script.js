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

 function resetForm() {
            document.getElementById('promoCode').value = '';
            document.getElementById('errorMessage').style.display = 'none';
        }
