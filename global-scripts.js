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

        function getSessionID() {
            let sessionID = sessionStorage.getItem('sessionID');
            if (!sessionID) {
                sessionID = generateUUID();
                sessionStorage.setItem('sessionID', sessionID);
            }
            return sessionID;
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
            const pathname = window.location.pathname;
            const pathParts = pathname.split('/');
            const pageName = pathParts.pop() || 'index.html'; // Default to 'index.html' if no page name
            const path = pathParts.join('/');

            let payload = {
                "Device ID": getDeviceID(),
                "Session ID": getSessionID(),
                "Device Type": "Unknown",
                "Operating System": "Unknown",
                "Operating System Version": "Unknown",
                "Browser": "Unknown",
                "Browser Version": "Unknown",
                "Screen Resolution": `${screen.width}x${screen.height}`,
                "Page Title": document.title,
                "Path": path,
                "Page Name": pageName,
                "Referrer": document.referrer,
                "User Agent": ua,
                "Language": navigator.language,
                "Platform": navigator.platform,
                "Cookies Enabled": navigator.cookieEnabled.toString(),
                "Viewport Size": `${window.innerWidth}x${window.innerHeight}`,
                "Time Zone": Intl.DateTimeFormat().resolvedOptions().timeZone,
                "Online Status": navigator.onLine.toString(),
                "Touch Support": ('ontouchstart' in window || navigator.maxTouchPoints > 0).toString(),
                "Hardware Concurrency": navigator.hardwareConcurrency ? navigator.hardwareConcurrency.toString() : 'Unknown',
                "Device Memory": navigator.deviceMemory ? navigator.deviceMemory.toString() : 'Unknown',
                "Connection Type": (navigator.connection && navigator.connection.effectiveType) ? navigator.connection.effectiveType.toString() : 'Unknown',
                "Battery Status": "Unknown",
                "Ad Blocker Active": isAdBlockerActive().toString(),
                "Browser Time": new Date().toLocaleString(),
                "Browser Window Dimensions": `${window.outerWidth}x${window.outerHeight}`,
                "Color Depth": screen.colorDepth.toString(),
                "Available Screen Size": `${screen.availWidth}x${screen.availHeight}`,
                "Device Pixel Ratio": window.devicePixelRatio.toString(),
                "Media Device Support": (!!(navigator.mediaDevices && navigator.mediaDevices.enumerateDevices)).toString(),
                "History Length": history.length.toString(),
                "Clipboard Access": (!!navigator.clipboard).toString(),
                "Fullscreen Support": (!!document.fullscreenEnabled).toString(),
                "Notification Support": ('Notification' in window).toString(),
                "Network Type": (navigator.connection && navigator.connection.type) ? navigator.connection.type.toString() : 'Unknown',
                "Network Download Speed": (navigator.connection && navigator.connection.downlink) ? navigator.connection.downlink + ' Mbps' : 'Unknown',
                "Query String": window.location.search,
                "Domain": window.location.hostname
            };

            if (navigator.getBattery) {
                navigator.getBattery().then(battery => {
                    payload["Battery Status"] = `${Math.round(battery.level * 100)}% ${battery.charging ? '(Charging)' : '(Not Charging)'}`;
                    console.log(payload);
                });
            } else {
                console.log(payload);
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

            for (let [device, pattern] of Object.entries(deviceTypePatterns)) {
                if (pattern.test(ua)) {
                    payload["Device Type"] = device;
                    break;
                }
            }

            for (let [os, pattern] of Object.entries(osPatterns)) {
                let match = ua.match(pattern);
                if (match) {
                    payload["Operating System"] = os;
                    payload["Operating System Version"] = match[1].replace(/_/g, '.');
                    break;
                }
            }

            for (let [browser, pattern] of Object.entries(browserPatterns)) {
                let match = ua.match(pattern);
                if (match) {
                    payload["Browser"] = browser;
                    payload["Browser Version"] = match[1];
                    break;
                }
            }

            if (!navigator.getBattery) {
                console.log(payload);
            }

            return payload;
        }

function amp(event,eventPayload){
    let userAgentString = navigator.userAgent;
    var globalPayload=globalProperties(userAgentString);
    var payload=mergePayloads(eventPayload,globalPayload);
    amplitude.track(event, payload); 
}
     
function mergePayloads(payload1, payload2) {
    return Object.assign({}, payload1, payload2);
}
