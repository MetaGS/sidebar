
export const makeRequest = function (json) {

    let prom = new Promise((resolve, reject) => {
        let data;
        setTimeout(function () {
            try {
                data = JSON.parse(json);
            } catch (error) {
                console.log('You provided wrong format');
                return reject('Wrong format')
            }
            let response = {
                name: data.name = 'starTrek',
                email: data.email,
                photoSrc: '/tim.jpg',
                nickName: 'StenLee'
            }
            response = JSON.stringify(response);
            resolve(response);
        }, 1000)
    })
    return prom;
}

