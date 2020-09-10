function formatoNumero(numero) {
  return numero.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function formatoMoneda(numero) {
  return '$' + numero.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function formatoEuro(numero) {
  return (
    num
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' €'
  )
}
