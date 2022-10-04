function getLastPush(username){
   return fetch(`https://api.github.com/users/${username}/events/public`, {
        headers: {
            'Authorization': 'token' + GITHUB_PROMISES_TOKEN
        }
    }).then(response => response.json())
        .then(events => {
            const dateOfLastPush = new Date(events[0].created_at).toDateString()
            console.log(dateOfLastPush);
            return dateOfLastPush
        });
}


//  below is an example with async instead of a bunch of .then
const lastPushPromise = getLastPush('jdpedrotti');
lastPushPromise.then(value => console.log(value)).catch(error => console.log(error))

async function getUserLastCommitAsync(username) {
    try {
        let response = await fetch(`https://api.github.com/users/${username}`);
        let events = await response.json();
        console.log(events);
    }
    catch(err) {
        console.log(err);
    }
}