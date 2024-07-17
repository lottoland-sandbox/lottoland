function validateCode() {
            const code = document.getElementById('promoCode').value;
            const errorMessage = document.getElementById('errorMessage');
            if (code.toUpperCase() === 'MIKE') {
                errorMessage.style.display = 'none';
                var eventPayload={
                        'Feature': Feature,
                        'Domain': Domain,
                        'Container': 'promoCode',
                        'Object': 'button',
                        'Name': 'redeem',
                        'Value': code,
                        'Outcome': 'success',    
                }
                
                 
                amplitude.track('click', eventPayload);              
                alert('Code redeemed successfully!');

                        
            } else {
                errorMessage.style.display = 'block';
                var eventPayload={
                        'Feature': Feature,
                        'Domain': Domain,
                        'Container': 'promoCode',
                        'Object': 'button',
                        'Name': 'redeem',
                        'Value': code,
                        'Outcome': 'failure',    
                }
                amplitude.track('click', eventPayload);      
            }
        }

 function showPromoContainer() {
            document.getElementById('promo-container').style.display = 'block';
            document.getElementById('promo-link').style.display = 'none';
             
            // ** Send an impression saying the promoCode section has been displayed
            var eventPayload={
                        'Feature': Feature,
                        'Domain': Domain,
                        'Container': 'promoCode',
                        
            }
              amplitude.track('display', eventPayload);      
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
            var eventPayload={
                        'Feature': Feature,
                        'Domain': Domain,
                        'Container': 'verify',
                       
            }
            
            amplitude.track('display', eventPayload);      
                        
            }
        }


 function togglePaymentDetails(method) {
        const details = document.querySelectorAll('.payment-details');
        const arrows = document.querySelectorAll('.payment-method .arrow');
        
        details.forEach(detail => {
            if (detail.id === method) {
                detail.style.display = detail.style.display === 'block' ? 'none' : 'block';

            //Fire click to show payment method has been opened
            var eventPayload={
                        'Feature': Feature,
                        'Domain': Domain,
                        'Container': 'paymentMethod',
                        'Object': 'link',
                        'Name': 'showMethod',
                        'Instrument': method,
            }
           amplitude.track('click', eventPayload);   

                        
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

function deposit(method,amount,container){
            //Fire click for deposit button being pressed
            var eventPayload={
                        'Feature': Feature,
                        'Domain': Domain,
                        'Container': container,
                        'Object': 'button',
                        'Name': 'deposit',
                        'Instrument': method,
                        'Amount': amount,     
            }
            amplitude.track('click', eventPayload);   
            callRandomDepositOutcome(method,amount);  
            
}

function callRandomDepositOutcome(method,amount) {
    const functions = [depositSuccess, depositFailure, depositPending];
    const randomIndex = Math.floor(Math.random() * functions.length);
    functions[randomIndex](method, amount);
}


function depositSuccess(method,amount){
         var eventPayload={
                        'Feature': Feature,
                        'Domain': Domain,
                        'Outcome': 'success',
                        'Instrument': method,
                        'Amount': amount,     
            }
            amplitude.track('outcome', eventPayload);       
         alert('Deposit Sucessful - '+method+' - '+amount);   
}

function depositFailure(method,amount){
            // Array of error descriptions
            var errorDescriptions = [
                "CVV is invalid",
                "Failure 3DS",
                "Card Expired",
                "System not responding",        
            ];
            var randomIndex = Math.floor(Math.random() * errorDescriptions.length);
            var randomError= errorDescriptions[randomIndex];
             var eventPayload={
                        'Feature': Feature,
                        'Domain': Domain,
                        'Outcome': 'failure',
                        'Instrument': method,
                        'Amount': amount,
                        'Error': randomError,
            }
            amplitude.track('outcome', eventPayload);      
          alert('Deposit Failure - '+method+' - '+amount+' because '+randomError);   
}




function depositPending(method,amount){
             var eventPayload={
                        'Feature': Feature,
                        'Domain': Domain,
                        'Outcome': 'pending',
                        'Instrument': method,
                        'Amount': amount,     
            }
            amplitude.track('outcome', eventPayload);      
            alert('Deposit Pending - '+method+' - '+amount);   
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
 

