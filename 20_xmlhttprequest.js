console.log({
    0: "UNSENT	Client has been created. open() not called yet.",
    1: "OPENED	open() has been called.",
    2: "HEADERS_RECEIVED	send() has been called, and headers and status are available.",
    3: "LOADING	Downloading; responseText holds partial data.",
    4: "DONE	The operation is complete.",
});

const requestUrl = "https://api.github.com/users/hiteshchoudhary";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        console.log(typeof data);
        console.log(data.followers);
    }
};
xhr.send();
