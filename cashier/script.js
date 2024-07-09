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

    // Function to show notification 30% of the time
        function showNotification() {
            const shouldShow = Math.random() < 0.2;
            if (shouldShow) {
                document.getElementById('notification').style.display = 'flex';

             //Fire Impression trigger for verification notification
                        
            }
        }


 function togglePaymentDetails(method) {
        const details = document.querySelectorAll('.payment-details');
        const arrows = document.querySelectorAll('.payment-method .arrow');
        
        details.forEach(detail => {
            if (detail.id === method) {
                detail.style.display = detail.style.display === 'block' ? 'none' : 'block';
            } else {
                detail.style.display = 'none';
            }
        });

        arrows.forEach(arrow => {
            const parent = arrow.parentNode.parentNode;
            if (parent.querySelector('.payment-details').id === method) {
                arrow.classList.toggle('open');
            } else {
                arrow.classList.remove('open');
            }
        });
    }

function deposit(method){
      alert(method);      
}

function payContinue(method){
      alert(method);      
}


function showPaymentInstruments() {
            document.getElementById('instruments').style.display = 'block';
            document.getElementById('payment-methods').style.display = 'none';
        }

function showPaymentMethods() {
            document.getElementById('instruments').style.display = 'none';
            document.getElementById('payment-methods').style.display = 'flex';
        }
