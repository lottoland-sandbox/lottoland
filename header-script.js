//RANDOM USERS
var user1 = {
    'name': 'MJ',
    'Account Status': 'VIP',
    'Verification Status': 'verified',
    'Player Number': '1234',
    'Balance': '10.23',
};

var user2 = {
    'name': 'ML',
    'Account Status': 'suspended',
    'Verification Status': 'unverified',
    'Player Number': '4321',
    'Balance': '102.23',
};

var user3 = {
    'name': 'PG',
    'Account Status': 'closed',
    'Verification Status': 'unverified',
    'Player Number': '2222',
    'Balance': '0.22',
};

var user4 = {
    'name': 'JF',
    'Account Status': 'self excluded',
    'Verification Status': 'pending',
    'Player Number': '18882',
    'Balance': '9.11',
};

// Function to select a random payload
function getRandomPlayer() {
    const payloads = [user1, user2, user3, user4];
    const randomIndex = Math.floor(Math.random() * payloads.length);
    return payloads[randomIndex];
}
