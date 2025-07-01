const form = document.getElementById('form');
const list = document.getElementById('list');
const inputItem = document.getElementById("inputItem");
const addBtn = document.getElementById('addBtn');
const resetBtn = document.getElementById('resetBtn');

let items = []

function salvarDados() {
  localStorage.setItem('listaCompras', JSON.stringify(items))
}

function renderizarLista() {
  list.innerHTML = ''
  items.forEach((item, index) => {
    const li = document.createElement('li')
    const span = document.createElement('span')

    span.textContent = item

    const btnDelete = document.createElement('button')
    btnDelete.textContent = 'X'
    btnDelete.title = 'Remover item'
    btnDelete.classList.add('delete')

    btnDelete.addEventListener('click', () => {
      removerItem(index)
    })

    li.appendChild(span)
    li.appendChild(btnDelete)
    list.appendChild(li)

    list.style.display = items.length ? "flex" : "none";
  })
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const novoItem = inputItem.value.trim()

  if(!novoItem) return

  items.push(novoItem)
  salvarDados()
  renderizarLista()

  inputItem.value = ''
})

function removerItem(index) {
  items.splice(index, 1)
  list.style.display = items.length ? "flex" : "none"
  salvarDados()
  renderizarLista()
}

resetBtn.addEventListener('click', () => {
  if(confirm('Deseja limpar toda a lista?')) {
    items = []
    salvarDados()
    renderizarLista()
    list.style.display = items.length ? "flex" : "none"
  }
})
