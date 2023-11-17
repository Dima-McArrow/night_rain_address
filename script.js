const url = new URL('https://api-adresse.data.gouv.fr/search')

function searchAddress() {
  let params = {q: document.getElementById("address").value}
  url.search = new URLSearchParams(params).toString()

  fetch(url)
    .then((response) => {
        if(response.ok){
            return response.json()
        } else {
            console.error("Erreur réponse : " + response.status)
        }
    })
    .then((data) => {
      fillResults(data)
    })
    .catch((error) => console.error(error)) //Traitement de l'erreur dans l'appel
}

function fillResults(data) {
  let list = document.getElementById('results')
  list.innerHTML = ''
  if(undefined !== data.features) {
    data.features.forEach(function(element) {
      let li = document.createElement('li')
      li.appendChild(document.createTextNode(element.properties.label))
      list.appendChild(li)
    })
  }
}
