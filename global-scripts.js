// ** FIELD TRACKING - ONLY FIRST FOCUS IN
function trackOnFieldFocus(event) {
    console.log('Field focused');
    var target = event.target;
    // Check if the focused element has a data-track attribute
    if (target.hasAttribute('data-track-name')) {
        // Extract attributes prefixed with "data-track-name"

        var trackContainer = target.getAttribute('data-track-container') || '';
        var trackObject = target.getAttribute('data-track-object') || '';
        var trackName = target.getAttribute('data-track-name');
        var trackValue = target.getAttribute('data-track-value') || '';
        var trackCategory = target.getAttribute('data-track-category') || '';
        var trackSubcategory = target.getAttribute('data-track-subcategory') || '';
        var trackAmount = target.getAttribute('data-track-amount') || '';
        var trackInstrument = target.getAttribute('data-track-instrument') || '';
        var trackGenre = target.getAttribute('data-track-genre') || '';
        var trackProduct = target.getAttribute('data-track-product') || '';
        var trackDescription = target.getAttribute('data-track-description') || '';

        // Construct event properties object
        var event_properties = {
            Name: trackName,
            Container: trackContainer,
            Object: trackObject,
            Value: trackValue,
            Category: trackCategory,
            Subcategory: trackSubcategory,
            Amount: trackAmount,
            Instrument: trackInstrument,
            Genre: trackGenre,
            Product: trackProduct,
            Description: trackDescription,
        };

        // Fire amplitude tracking with 'focus' event type
        event_properties['Feature'] = Feature;
        event_properties['Domain'] = Domain;
        event_properties['Value'] = 'firstfocusin';
        amplitude.track('click', event_properties);
    }
}

// Attach focus event listener to all form fields with data-track attribute
document.addEventListener('focusin', function(event) {
    var target = event.target;
    if ((target.tagName === 'INPUT' || target.tagName === 'SELECT') && target.hasAttribute('data-track-name')) {
        trackOnFieldFocus(event);
    }
});


// ** FUNCTION TO TRACK LINK CLICKS
function trackLinkClick(event) {
    var target = event.target;
    if (target.tagName === 'A' && target.hasAttribute('data-track-name')) {
        var trackContainer = target.getAttribute('data-track-container') || '';
        var trackObject = target.getAttribute('data-track-object') || '';
        var trackName = target.getAttribute('data-track-name');
        var trackValue = target.getAttribute('data-track-value') || '';
        var trackCategory = target.getAttribute('data-track-category') || '';
        var trackSubcategory = target.getAttribute('data-track-subcategory') || '';
        var trackAmount = target.getAttribute('data-track-amount') || '';
        var trackInstrument = target.getAttribute('data-track-instrument') || '';
        var trackGenre = target.getAttribute('data-track-genre') || '';
        var trackProduct = target.getAttribute('data-track-product') || '';
        var trackDescription = target.getAttribute('data-track-description') || '';

        // Construct event properties object
        var event_properties = {
            Name: trackName,
            Container: trackContainer,
            Object: trackObject,
            Value: trackValue,
            Category: trackCategory,
            Subcategory: trackSubcategory,
            Amount: trackAmount,
            Instrument: trackInstrument,
            Genre: trackGenre,
            Product: trackProduct,
            Description: trackDescription,
        };

        // Fire amplitude tracking with 'click' event type
        event_properties['Feature'] = Feature;
        event_properties['Domain'] = Domain;
        amplitude.track('click', event_properties);
    }
}

// Attach click event listener to all links with data-track-name attribute
var links = document.querySelectorAll('a[data-track-name]');
links.forEach(function(link) {
    link.addEventListener('click', trackLinkClick);
});


// ** FUNCTION TO TRACK BUTTON CLICKS
function trackButtonClick(event) {
    var target = event.target;
    if (target.tagName === 'BUTTON' && target.hasAttribute('data-track-name')) {
        var trackContainer = target.getAttribute('data-track-container') || '';
        var trackObject = target.getAttribute('data-track-object') || '';
        var trackName = target.getAttribute('data-track-name');
        var trackValue = target.getAttribute('data-track-value') || '';
        var trackCategory = target.getAttribute('data-track-category') || '';
        var trackSubcategory = target.getAttribute('data-track-subcategory') || '';
        var trackAmount = target.getAttribute('data-track-amount') || '';
        var trackInstrument = target.getAttribute('data-track-instrument') || '';
        var trackGenre = target.getAttribute('data-track-genre') || '';
        var trackProduct = target.getAttribute('data-track-product') || '';
        var trackDescription = target.getAttribute('data-track-description') || '';

        // Construct event properties object
        var event_properties = {
            Name: trackName,
            Container: trackContainer,
            Object: trackObject,
            Value: trackValue,
            Category: trackCategory,
            Subcategory: trackSubcategory,
            Amount: trackAmount,
            Instrument: trackInstrument,
            Genre: trackGenre,
            Product: trackProduct,
            Description: trackDescription,
        };

        // Fire amplitude tracking with 'click' event type
        event_properties['Feature'] = Feature;
        event_properties['Domain'] = Domain;
        amplitude.track('click', event_properties);
    }
}

// Attach click event listener to all buttons with data-track-name attribute
var buttons = document.querySelectorAll('button[data-track-name]');
buttons.forEach(function(button) {
    button.addEventListener('click', trackButtonClick);
});



function generateUUID() {
    // Generates a simple UUID
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function getDeviceID() {
    let deviceID = localStorage.getItem('deviceID');
    if (!deviceID) {
        deviceID = generateUUID();
        localStorage.setItem('deviceID', deviceID);
    }
    return deviceID;
}



function isAdBlockerActive() {
    let adBlockerDetected = false;
    const testAd = document.createElement('div');
    testAd.innerHTML = '&nbsp;';
    testAd.className = 'adsbox';
    document.body.appendChild(testAd);
    if (testAd.offsetHeight === 0) {
        adBlockerDetected = true;
    }
    document.body.removeChild(testAd);
    return adBlockerDetected;
}

function globalProperties(ua) {
    let payload = {
        "Device ID": getDeviceID(),
        "Device Type": "Unknown",
        "Operating System": "Unknown",
        "Operating System Version": "Unknown",
        "Browser": "Unknown",
        "Browser Version": "Unknown",
        "Screen Resolution": `${screen.width}x${screen.height}`,
        "Page Title": document.title,
        "Page Path": window.location.pathname,
        "Referrer": document.referrer,
        "User Agent": ua,
        "Language": navigator.language,
        "Platform": navigator.platform,
        "Cookies Enabled": navigator.cookieEnabled,
        "Viewport Size": `${window.innerWidth}x${window.innerHeight}`,
        "Time Zone": Intl.DateTimeFormat().resolvedOptions().timeZone,
        "Online Status": navigator.onLine,
        "Touch Support": 'ontouchstart' in window ||
            navigator.maxTouchPoints > 0,
        "Installed Plugins": Array.from(navigator.plugins).map(plugin => plugin.name).join(', '),
        "Do Not Track": navigator.doNotTrack,
        "Hardware Concurrency": navigator.hardwareConcurrency,
        "Device Memory": navigator.deviceMemory || 'Unknown',
        "Connection Type": navigator.connection ?
            navigator.connection.effectiveType : 'Unknown',
        "Battery Status": "Unknown",
        "JavaScript Version": "ES2023", // Modern JS version
        "Flash Support":
            !!navigator.mimeTypes['application/x-shockwave-flash'],
        "Ad Blocker Active": isAdBlockerActive(),
        "Browser Time": new Date().toLocaleString(),
        "Service Worker Support": 'serviceWorker' in navigator,
        "WebGL Support": (() => {
            try {
                const canvas = document.createElement('canvas');
                return !!window.WebGLRenderingContext &&
                    (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
            } catch (e) {
                return false;
            }
        })(),
        "CSS Grid Support": CSS.supports('display', 'grid'),
        "Browser Window Dimensions": `${window.outerWidth}x${window.outerHeight}`,
        "Color Depth": screen.colorDepth,
        "Available Screen Size": `${screen.availWidth}x${screen.availHeight}`,
        "Device Pixel Ratio": window.devicePixelRatio,
        "Media Device Support": !!(navigator.mediaDevices &&
            navigator.mediaDevices.enumerateDevices),
        "History Length": history.length,
        "Clipboard Access": !!navigator.clipboard,
        "Fullscreen Support": !!document.fullscreenEnabled,
        "Notification Support": 'Notification' in window,
        "Vibration Support": 'vibrate' in navigator,
        "Gamepad Support": 'getGamepads' in navigator,
        "Web Audio Support": 'AudioContext' in window ||
            'webkitAudioContext' in window,
        "WebRTC Support": 'RTCPeerConnection' in window,
        "Speech Recognition Support": 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window,
        "IndexedDB Support": !!window.indexedDB,
        "Performance Timing": {
            "Navigation Start": performance.timing.navigationStart,
            "Load Event End": performance.timing.loadEventEnd,
            // Add more timing metrics as needed
        },
        "Local Storage Usage": {
            "Used": JSON.stringify(localStorage).length,
            "Total": localStorage.length
        },
        "Session Storage Usage": {
            "Used": JSON.stringify(sessionStorage).length,
            "Total": sessionStorage.length
        },
        "Network Information": {
            "Type": navigator.connection ?
                navigator.connection.type : 'Unknown',
            "Download Speed": navigator.connection ?
                navigator.connection.downlink + ' Mbps' : 'Unknown',
            // Add more network information as needed
        },
        "Idle Detection": {
            "Idle": document.hasFocus() ? 'Active' : 'Idle'
        },
        "Pointer Type": {
            "Type": window.matchMedia('(pointer:fine)').matches ?
                'Fine' : 'Coarse'
        },
        "Time Since Last Interaction": {
            "Last Interaction": new Date(Date.now() -
                performance.timeOrigin).toISOString().substr(11, 8) + ' ago'
        },
        "Web Bluetooth Support": {
            "Supported": 'bluetooth' in navigator
        },
        "WebUSB Support": {
            "Supported": 'usb' in navigator
        }
    };

    // Attempt to get battery status if supported
    if (navigator.getBattery) {
        navigator.getBattery().then(battery => {
            payload["Battery Status"] =
                `${Math.round(battery.level * 100)}% ${battery.charging ? '(Charging)' :
'(Not Charging)'}`;
            console.log(payload); // Log the payload once
            battery status is retrieved
        });
    } else {
        console.log(payload); // Log the payload immediately
        if battery status is not supported
    }

    let deviceTypePatterns = {
        "Mobile": /Mobi/i,
        "Tablet": /Tablet|iPad/i,
        "Desktop": /Windows|Macintosh|Linux/i
    };

    let osPatterns = {
        "Windows": /Windows NT (\d+\.\d+)/i,
        "MacOS": /Mac OS X (\d+[\._]\d+)/i,
        "iOS": /iPhone OS (\d+[\._]\d+)/i,
        "Android": /Android (\d+\.\d+)/i,
        "Linux": /Linux/i
    };

    let browserPatterns = {
        "Chrome": /Chrome\/(\d+\.\d+)/i,
        "Firefox": /Firefox\/(\d+\.\d+)/i,
        "Safari": /Version\/(\d+\.\d+).*Safari/i,
        "Edge": /Edg\/(\d+\.\d+)/i,
        "Internet Explorer": /MSIE (\d+\.\d+);/i
    };

    // Detect Device Type
    for (let [device, pattern] of Object.entries(deviceTypePatterns)) {
        if (pattern.test(ua)) {
            payload["Device Type"] = device;
            break;
        }
    }

    // Detect Operating System and Version
    for (let [os, pattern] of Object.entries(osPatterns)) {
        let match = ua.match(pattern);
        if (match) {
            payload["Operating System"] = os;
            payload["Operating System Version"] =
                match[1].replace(/_/g, '.');
            break;
        }
    }

    // Detect Browser and Version
    for (let [browser, pattern] of Object.entries(browserPatterns)) {
        let match = ua.match(pattern);
        if (match) {
            payload["Browser"] = browser;
            payload["Browser Version"] = match[1];
            break;
        }
    }

    // Log the payload immediately if battery status is not supported
    if (!navigator.getBattery) {
        console.log(payload);
    }

    return payload;
}
