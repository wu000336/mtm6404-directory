// 1. list() function - uses map() method to create HTML string
function list(clients) {
  return clients.map((client) => {
    return `<li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
      ${client.name}
      <strong>$ ${client.balance.toFixed(2)}</strong>
    </li>`
  }).join('')
}

// 2. order() function - uses sort() method to sort array
function order(clients, property) {
  return clients.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1
    } else if (a[property] > b[property]) {
      return 1
    } else {
      return 0
    }
  })
}

// 3. total() function - uses reduce() method to calculate total balance
function total(clients) {
  return clients.reduce((sum, client) => {
    return sum + client.balance
  }, 0)
}

// 4. info() function - uses find() method to find client
function info(index) {
  return clients.find((client) => {
    return client.index === index
  })
}

// 5. search() function - uses filter() method to search clients
function search(query) {
  return clients.filter((client) => {
    return client.name.toLowerCase().includes(query.toLowerCase())
  })
}