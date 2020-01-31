


export const makeRequest = function (json) {


    // const data = JSON.parse(json);

    let prom = new Promise((resolve, reject) => {
        let data;
        setTimeout(function () {
            try {
                data = JSON.parse(json);
            } catch (error) {
                console.log('You provided wrong format');
                return reject('Wrong format')
            }
            const response = {
                name: data.name,
                email: data.email,
                imgSrc: '../src/tim.jpg'
            }
            resolve(response);
        }, 1000)
    })
    return prom;
}

const format = {
    name: 'Sten',
    email: 'haha9595@inbox.ru'
}

makeRequest(JSON.stringify(format))
    .then((data) => console.log(data))
    .catch((erro) => {
        console.log(`Yoour error is: ${erro}`)
    });