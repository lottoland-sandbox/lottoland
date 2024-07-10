function validateCode() {
            const code = document.getElementById('promoCode').value;
            const errorMessage = document.getElementById('errorMessage');
            if (code.toUpperCase() === 'MIKE') {
                errorMessage.style.display = 'none';
                var payload={
                        'Feature': Feature,
                        'Domain': Domain,
                        'Container': 'promoCode',
                        'Object': 'button',
                        'Name': 'redeem',
                        'Value': code,
                        'Outcome': 'success',    
                }
                amplitude.track('click', payload);              
                alert('Code redeemed successfully!');

                        
            } else {
                errorMessage.style.display = 'block';
                var payload={
                        'Feature': Feature,
                        'Domain': Domain,
                        'Container': 'promoCode',
                        'Object': 'button',
                        'Name': 'redeem',
                        'Value': code,
                        'Outcome': 'failure',    
                }
                amplitude.track('click', payload); 
            }
        }

 function showPromoContainer() {
            document.getElementById('promo-container').style.display = 'block';
            document.getElementById('promo-link').style.display = 'none';
             
            // ** Send an impression saying the promoCode section has been displayed
            var payload={
                        'Feature': Feature,
                        'Domain': Domain,
                        'Container': 'promoCode',
                        'Display Type': 'impression',
            }
            amplitude.track('display', payload);      
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
            var payload={
                        'Feature': Feature,
                        'Domain': Domain,
                        'Container': 'verify',
                        'Display Type': 'impression',
            }
            amplitude.track('display', payload);      
                        
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
            document.getElementById('addMethod').style.display = 'block';
            document.getElementById('useStored').style.display = 'none';
        }

function showPaymentMethods() {
            document.getElementById('instruments').style.display = 'none';
            document.getElementById('payment-methods').style.display = 'block';
            document.getElementById('addMethod').style.display = 'none';
            document.getElementById('useStored').style.display = 'block';
        }

function showStep2() {
            document.getElementById('step1').style.display = 'none';
            document.getElementById('step2').style.display = 'block';
}

function showStep1() {
            document.getElementById('step1').style.display = 'block';
            document.getElementById('step2').style.display = 'none';
}
 

