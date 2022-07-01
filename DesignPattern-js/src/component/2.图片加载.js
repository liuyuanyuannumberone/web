function loadImg(src) {
    return new Promise((resolve, reject) => {
        let imgElement = document.createElement('img');
        imgElement.src = src;
        imgElement.onload = function () {
            resolve(imgElement);
        };
        imgElement.onerror = function () {
            reject('img load err');
        };
    });
}

let src ='https://www.google.com.hk/logos/doodles/2022/fathers-day-2022-june-19-6753651837109444-law.gif';
loadImg(src)
    .then(imgElement => {
        console.log(imgElement, imgElement.width, imgElement.height);
    })
    .catch(err => {
        console.error(err);
    });
