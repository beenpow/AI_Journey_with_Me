const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('성공')
    }, 2000)
})

promise.then((result) => {
    console.log(result)
})

promise.catch((error) => {
    console.log(error)
})