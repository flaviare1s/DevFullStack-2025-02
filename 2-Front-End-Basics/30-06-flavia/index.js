const form = document.getElementById('form')
const list = document.getElementById('list')
const inputItem = document.getElementById("inputItem")
const addBtn = document.getElementById('addBtn')
const resetBtn = document.getElementById('resetBtn')
const contador = document.getElementById('contador')

let items = JSON.parse(localStorage.getItem('listaCompras')) || []
function salvarDados() {
  localStorage.setItem('listaCompras', JSON.stringify(items))
}

function renderizarLista() {
  list.innerHTML = ""
  const itensFiltrados = obterItensFiltrados()
  itensFiltrados.forEach((itemFiltrado) => {
    const index = items.findIndex((i) => i.item === itemFiltrado.item)

    const div = document.createElement("div")
    div.classList.add("div")

    const li = document.createElement("li")
    li.classList.add("item")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.checked = itemFiltrado.comprado

    checkbox.addEventListener("change", () => {
      items[index].comprado = checkbox.checked
      salvarDados()
      renderizarLista()
    });

    const label = document.createElement("label")
    label.textContent = itemFiltrado.item;
    label.setAttribute("for", `item${index}`)

    if (itemFiltrado.comprado) {
      label.classList.add("checked")
    }

    const btnDelete = document.createElement("button")
    btnDelete.textContent = "🗑️"
    btnDelete.title = "Remover item"
    btnDelete.classList.add("delete")

    btnDelete.addEventListener("click", () => {
      removerItem(index)
    });

    li.appendChild(div)
    div.appendChild(checkbox)
    div.appendChild(label)
    li.appendChild(btnDelete)
    list.appendChild(li)
    label.id = `item${index}`
    checkbox.id = `item${index}`

    list.style.display = items.length ? "flex" : "none"
  })
  contador.textContent = `${items.length} item(s) na lista`
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

let filtroAtual = "todos"
const todos = document.getElementById('todos')
const comprados = document.getElementById('comprados')
const pendentes = document.getElementById('pendentes')

function obterItensFiltrados() {
  if (filtroAtual === "todos") {
    return items
  } else if (filtroAtual === "comprados") {
    return items.filter(item => item.comprado)
  } else if (filtroAtual === "pendentes") {
    return items.filter(item => !item.comprado)
  }
  return items
}

todos.addEventListener('change', () => {
  filtroAtual = "todos"
  renderizarLista()
});

comprados.addEventListener('change', () => {
  filtroAtual = "comprados"
  renderizarLista()
})

pendentes.addEventListener('change', () => {
  filtroAtual = "pendentes"
  renderizarLista()
})

renderizarLista()

// Funcionalidades:
// Permita ordenar alfabeticamente ou por status
