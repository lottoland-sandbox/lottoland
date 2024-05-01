var currentStep = 1;



function nextStep(step) {
    document.getElementById(`step-${step}`).classList.remove('active');
    document.getElementById(`step-${step + 1}`).classList.add('active');
    currentStep = step + 1;
    updateProgressBar(currentStep);
    //TRACKING
    var event_properties = {
        'Id': 'register',
        'Category': 'Step ' + currentStep,
        'Display Type': 'impression',
    };
    event_properties['Feature'] = Feature; 
    amplitude.track('display', event_properties);
}

function prevStep(step) {
    document.getElementById(`step-${step}`).classList.remove('active');
    document.getElementById(`step-${step - 1}`).classList.add('active');
    currentStep = step - 1;
    updateProgressBar(currentStep);
    //TRACKING
    var event_properties = {
        'Id': 'register',
        'Category': 'Step ' + currentStep,
        'Display Type': 'impression',
    };
    event_properties['Feature'] = Feature;
    amplitude.track('display', event_properties);
}

function updateProgressBar(step) {
    const progressBarInner = document.querySelector('.progress-bar-inner');
    const fillPercentage = Math.min((step - 1) / 3 * 100, 100);
    progressBarInner.style.width = `${fillPercentage}%`;
}

function submitForm() {
    // You can add form submission logic here.
    // This is just a placeholder.
    // Simulate a successful form submission for demonstration purposes.
    // alert('Form submitted successfully!');



    // Construct event properties object
    var event_properties = {
        Name: 'outcome',
    };

    // Generate random number between 1 and 100
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    // Initialize event properties object
    var event_properties = {};

    // Check if randomNumber is less than 20
    if (randomNumber < 20) {
        // Track failure
        event_properties.Outcome = 'failure';
        // Generate random error value
        var errors = ['Duplicate_Account', 'System_Unavailable', 'Fraud', 'Network_Issue'];
        var randomErrorIndex = Math.floor(Math.random() * errors.length);
        event_properties.Error = errors[randomErrorIndex];
        alert('Registration Failure');
    } else {
        // Track success
        event_properties.Outcome = 'success';
        // Generate random status value
        var statuses = ['verified', 'unverified'];
        var randomStatusIndex = Math.floor(Math.random() * statuses.length);
        event_properties.Status = statuses[randomStatusIndex];
        alert('Registration Success');
    }

// Example output
console.log(event_properties);




    
    event_properties['Feature'] = Feature;
    amplitude.track('outcome', event_properties);

    // Redirect to the confirmation page after submission.
    // var queryString = window.location.search;
    //var destinationPageURL = "confirmation.html" + queryString;
    //window.location.href = destinationPageURL;
}

function redirectToRegistration() {
    var queryString = window.location.search;
    var registrationPageURL = "register.html" + queryString;
    window.location.href = registrationPageURL;
}

function redirectToSite() {
    var queryString = window.location.search;
    var destinationPageURL = "site.html" + queryString;
    window.location.href = destinationPageURL;
}

function redirectToCashier() {
    var queryString = window.location.search;
    var destinationPageURL = "cashier.html" + queryString;
    window.location.href = destinationPageURL;
}


// FIELD TRACKING
// Function to track when a form field receives focus
function trackOnFieldFocus(event) {
    console.log('Field focused');
    var target = event.target;
    // Check if the focused element has a data-track attribute
    if (target.hasAttribute('data-track-name')) {
        // Extract attributes prefixed with "data-track-name"
        var trackName = target.getAttribute('data-track-name');
        var trackContainer = target.getAttribute('data-track-container') || '';
        var trackObject = target.getAttribute('data-track-object') || '';
        var trackCategory = target.getAttribute('data-track-category') || '';

        // Construct event properties object
        var event_properties = {
            Name: trackName,
            Container: trackContainer,
            Object: trackObject,
            Category: trackCategory,
            Value: 'firstfocusin',
        };

        // Fire amplitude tracking with 'focus' event type
        event_properties['Feature'] = Feature;
        amplitude.track('click', event_properties);
    }
}

// Attach focus event listener to all form fields with data-track attribute
document.addEventListener('focusin', function(event) {
    var target = event.target;
    if (target.tagName === 'INPUT' && target.hasAttribute('data-track-name')) {
        trackOnFieldFocus(event);
    }
});


// FUNCTION TO TRACK LINK CLICKS
function trackLinkClick(event) {
    var target = event.target;
    if (target.tagName === 'A' && target.hasAttribute('data-track-name')) {
        var trackName = target.getAttribute('data-track-name');
        var trackContainer = target.getAttribute('data-track-container') || '';
        var trackObject = target.getAttribute('data-track-object') || '';
        var trackCategory = target.getAttribute('data-track-category') || '';

        // Construct event properties object
        var event_properties = {
            Name: trackName,
            Container: trackContainer,
            Object: trackObject,
            Category: trackCategory
        };

        // Fire amplitude tracking with 'click' event type
        event_properties['Feature'] = Feature;
        amplitude.track('click', event_properties);
    }
}

// Attach click event listener to all links with data-track-name attribute
var links = document.querySelectorAll('a[data-track-name]');
links.forEach(function(link) {
    link.addEventListener('click', trackLinkClick);
});


// FUNCTION TO TRACK BUTTON CLICKS
function trackButtonClick(event) {
    var target = event.target;
    if (target.tagName === 'BUTTON' && target.hasAttribute('data-track-name')) {
        var trackName = target.getAttribute('data-track-name');
        var trackContainer = target.getAttribute('data-track-container') || '';
        var trackObject = target.getAttribute('data-track-object') || '';
        var trackCategory = target.getAttribute('data-track-category') || '';
        var trackValue = target.getAttribute('data-track-value') || '';
        var trackCampaign = target.getAttribute('data-track-campaign') || '';
        var trackOffer = target.getAttribute('data-track-offer') || '';
        var trackGenre = target.getAttribute('data-track-genre') || '';
        var trackProduct = target.getAttribute('data-track-product') || '';


        // Construct event properties object
        var event_properties = {
            Name: trackName,
            Container: trackContainer,
            Object: trackObject,
            Category: trackCategory,
            Value: trackValue,
            Campaign: trackCampaign,
            Offer: trackOffer,
            Genre: trackGenre,
            Product: trackProduct,
        };

        // Fire amplitude tracking with 'click' event type
        event_properties['Feature'] = Feature;
      
        if (!event_properties['Campaign']) {event_properties['Campaign'] = utmCampaign;}
        if(!event_properties['Offer']) {event_properties['Offer'] = Promo;}        
        event_properties['Source'] = utmSource;
        event_properties['Medium'] = utmMedium;
        event_properties['Partner'] = Affiliate;
        amplitude.track('click', event_properties);
    }
}

// Attach click event listener to all buttons with data-track-name attribute
var buttons = document.querySelectorAll('button[data-track-name]');
buttons.forEach(function(button) {
    button.addEventListener('click', trackButtonClick);
});


