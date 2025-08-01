const minhaPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sucesso = false
    if(sucesso) {
      resolve('Sucesso')
    } else {
      reject(new Error('Erro'))
    }
  }, 3000)
})

minhaPromise.then(result => {
  console.log(result)
}).catch(error => {
  console.error(error)
}).finally(() => {
  console.log('Operação concluida')
})
