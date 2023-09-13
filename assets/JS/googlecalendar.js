let indexval;
function setindex(index){
    indexval = index;
}
let existingtask = JSON.parse(localStorage.getItem("usertasks"));

/* exported gapiLoaded */
/* exported gisLoaded */

// TODO: Set to client ID and API key from the Developer Console
const CLIENT_ID = '879687241176-kh9udu4dc6at9jqlmfohlrs0ovi01pms.apps.googleusercontent.com';
const API_KEY = 'AIzaSyB-KNY4pNja2u2dh317PINNA2i0ZhJnJLY';

// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/calendar';

let tokenClient;
let gapiInited = false;
let gisInited = false;

/**
 * Callback after api.js is loaded.
 */
function gapiLoaded() {
    gapi.load('client', initializeGapiClient);
}

/**
 * Callback after the API client is loaded. Loads the
 * discovery doc to initialize the API.
 */
async function initializeGapiClient() {
    await gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
    });
    gapiInited = true;
    maybeEnableButtons();
}

/**
 * Callback after Google Identity Services are loaded.
 */
function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '', // defined later
    });
    gisInited = true;
    maybeEnableButtons();
}

/**
 * Enables user interaction after all libraries are loaded.
 */
function maybeEnableButtons() {
    if (gapiInited && gisInited) {
        document.getElementById('authorize_button').style.visibility = 'visible';
    }
}

/**
 *  Sign in the user upon button click and create an event.
 */
function handleAuthClick() {
    tokenClient.callback = async (resp) => {
        if (resp.error !== undefined) {
            throw (resp);
        }
        await createEvent();
    };

    if (gapi.client.getToken() === null) {
        // Prompt the user to select a Google Account and ask for consent to share their data
        // when establishing a new session.
        tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
        // Skip display of account chooser and consent dialog for an existing session.
        tokenClient.requestAccessToken({ prompt: '' });
    }
}

/**
 * Create a new event in the user's Google Calendar.
 */
async function createEvent() {

    const duedateevent = existingtask[indexval]["duedate"]
    const startevent = existingtask[indexval]["startingtime"]
    const endevent = existingtask[indexval]['endingtime']

    const event = {
        'summary': 'FreshTime test event',
        'description': 'Freshtime test event',
        'start': {
            'dateTime': duedateevent + 'T' + startevent + ':00+05:30',
            'timeZone': 'Asia/Kolkata'
        },
        'end': {
            'dateTime': duedateevent + 'T' + endevent + ':00+05:30',
            'timeZone': 'Asia/Kolkata'
        },
        'recurrence': [
            'RRULE:FREQ=DAILY;COUNT=1'
        ],
        'reminders': {
            'useDefault': false,
            'overrides': [
                { 'method': 'popup', 'minutes': 10 }
            ]
        }
    };

    try {
        const response = await gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event
        });
        appendPre('Event created: ' + response.result.htmlLink);
    } catch (error) {
        appendPre('Error creating event: ' + error.message);
        console.log('Error:', error);
    }
}

function appendPre(message) {
    const pre = document.getElementById('content');
    const textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
}