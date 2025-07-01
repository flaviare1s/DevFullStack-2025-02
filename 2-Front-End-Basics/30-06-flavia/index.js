const form = document.getElementById('form')
const list = document.getElementById('list')
const inputItem = document.getElementById("inputItem")
const addBtn = document.getElementById('addBtn')
const resetBtn = document.getElementById('resetBtn')

let items = JSON.parse(localStorage.getItem('listaCompras')) || []

function salvarDados() {
  localStorage.setItem('listaCompras', JSON.stringify(items))
}

function renderizarLista() {
  list.innerHTML = ''
  items.forEach((item, index) => {
    const div = document.createElement('div')
    div.classList.add('div')

    const li = document.createElement('li')
    li.classList.add('item')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = item.comprado

    checkbox.addEventListener("change", () => {
      items[index].comprado = checkbox.checked
      salvarDados()
      renderizarLista()
    })

    const label = document.createElement('label')
    label.textContent = item.item

    const btnDelete = document.createElement('button')
    btnDelete.textContent = '🗑️'
    btnDelete.title = 'Remover item'
    btnDelete.classList.add('delete')

    btnDelete.addEventListener('click', () => {
      removerItem(index)
    })

    li.appendChild(div)
    div.appendChild(checkbox)
    div.appendChild(label)
    li.appendChild(btnDelete)
    list.appendChild(li)

    list.style.display = items.length ? "flex" : "none"
  })
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const novoItem = inputItem.value.trim()

  if(!novoItem) return

  items.push({
    item: novoItem,
    comprado: false
  })
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


// Funcionalidades:

// Contador de Itens - Mostrar quantos itens tem na lista, atualizando em tempo real
// Adicione filtros para itens 'comprados' e 'pedentes'
// Permita ordenar alfabeticamente ou por status
