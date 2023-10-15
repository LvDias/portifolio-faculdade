const changeContent = (id) => {

  let elAbout = document.getElementById('about')
  let elStudies = document.getElementById('studies')
  let elContact = document.getElementById('contact')
  
  switch(id){
    case 'about':
      elAbout.style = 'display: grid;'
      elStudies.style = 'display: none;'
      elContact.style = 'display: none;'
      break
    case 'studies':
      elAbout.style = 'display: none;'
      elStudies.style = 'display: grid;'
      elContact.style = 'display: none;'
      break
    case 'contact': 
      elAbout.style = 'display: none;'
      elStudies.style = 'display: none;'
      elContact.style = 'display: grid;'
  }

}