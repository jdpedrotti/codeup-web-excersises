// API -- Application Programming Interface
// a set of rules defining how applications and/or devices can connect to each other and communicate with one another

// REST Representational State Transfer
// pattern of design principles for APIs
// REST APIs communicate via HTTP requests

// In a REST API, communication via http request is used to perform the standard set of actions called CRUD
// CRUD Create Read Update Delete

// JSON Javascript Object Notation is not mandatory but is popular bc it is both human and machine-readable

// https://glitch.com/ionian-ballistic-ferryboat

const moviesURL = "https://ionian-ballistic-ferryboat.glitch.me/movies"

const booksURL = "https://ionian-ballistic-ferryboat.glitch.me/books"

// the R in CRUD: Read

function getMovies(){
    fetch("https://ionian-ballistic-ferryboat.glitch.me/movies")
        .then(resp => resp.json()).then(data => console.log(data));
}

getMovies();

// the C in CRUD: Create

const bookToPost = {
    title: "Jurassic Park",
    author: {
        firstName: "Michael",
        lastName: "Crichton"
    }
}

const postOptions = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(bookToPost)
}

function getBooks(){
    fetch("https://ionian-ballistic-ferryboat.glitch.me/books")
        .then(resp => resp.json()).then(data => console.log(data));
}

getBooks();

// fetch(booksURL, postOptions).then(getBooks);


// the U in CRUD: Updating with PUT and PATCH requests
// Use PUT to replace the entire content
// Use Patch to modify only part of the entry

let modification = {
    title: "Eleanor of Aquitaine: Queen of France, Queen of England"
}

const patchOptions = {
    method: 'PATCH',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(modification)
}

// fetch(booksURL + "/1", patchOptions).then(getBooks);

modification = {
    title: "Eleanor of Aquitaine and the Four Kings",
    author: {
        firstName: "Amy",
        lastName: "Kelly"
    }
}

const putOptions = {
    method: 'PUT',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(modification)
}

// fetch(booksURL + "/1", putOptions).then(getBooks);

// the D in CRUD: Delete

const deleteOptions = {
    method: 'DELETE',
    headers: {
        'Content-Type' : 'application/json'
    }
}

fetch(booksURL + "/1", deleteOptions).then(getBooks);


