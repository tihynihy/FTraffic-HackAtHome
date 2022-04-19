const button = document.getElementsByClassName("btn")
let loc = document.getElementById("loc")
let name = document.getElementById("name")
let last = document.getElementById("lastName")
let phone = document.getElementById("phone")
let frame = document.getElementById("frame")

const names = [ 
    {name: "Hamid",  lastName: "Al-Mashabani", phone: "0912341234", location: "Sarajevska 4"},
    {name: "Maja",  lastName: "Majanovic", phone: "062420690", location: "Centar 10"},
    {name: "Kristijan",  lastName: "Isanovic", phone: "0628976142", location: "Velešicka ulica 2"},
    {name: "Nemanja",  lastName: "Nemanjic", phone: "062420690", location: "Centar 10"},
    {name: "Amina",  lastName: "Aminovic", phone: "0617980702", location: "Soukbunar 55"},

]

const maps = [
    {map: `https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d23017.90274758643!2d18.37365839706303!3d43.85089871334898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x4758c96e290a0463%3A0x4c4c16cdd688d967!2sDom%20zdravlja%20Novi%20Grad%2C%20Bulevar%20Me%C5%A1e%20Selimovi%C4%87a%2C%20Sarajevo!3m2!1d43.8493736!2d18.3645633!4m5!1s0x4758c8c2ccb02d31%3A0x809416ce761babc1!2sSoukbunar%2C%20Sarajevo%2071000!3m2!1d43.8522837!2d18.4145632!5e0!3m2!1sbs!2sba!4v1649506372979!5m2!1sbs!2sba`},
    {map: `https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d23014.17957914808!2d18.37549224707812!3d43.860544913331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x4758c96e290a0463%3A0x4c4c16cdd688d967!2sDom%20zdravlja%20Novi%20Grad%2C%20Bulevar%20Me%C5%A1e%20Selimovi%C4%87a%2C%20Sarajevo!3m2!1d43.8493736!2d18.3645633!4m5!1s0x4758cf2bbee049bb%3A0x9e7732a122b6e4bf!2sBreka%2C%20Sarajevo!3m2!1d43.871635399999995!2d18.4202466!5e0!3m2!1sbs!2sba!4v1649506660002!5m2!1sbs!2sba`},
    {map: `https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d23021.57984651961!2d18.316157147048088!3d43.84137021336689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x4758c96e290a0463%3A0x4c4c16cdd688d967!2sDom%20zdravlja%20Novi%20Grad%2C%20Bulevar%20Me%C5%A1e%20Selimovi%C4%87a%202%2C%20Sarajevo%2071000!3m2!1d43.8493736!2d18.3645633!4m5!1s0x4758ca6ae14b9f89%3A0x20de37389b89e2a5!2zSHJhc25pxI1rYSBjZXN0YSAzLCBJbGlkxb5h!3m2!1d43.828820799999995!2d18.3050533!5e0!3m2!1sbs!2sba!4v1649506814625!5m2!1sbs!2sba`},
    {map: `https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d5755.1795921962885!2d18.355752829100837!3d43.84360271646077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x4758c96e290a0463%3A0x4c4c16cdd688d967!2sDom%20zdravlja%20Novi%20Grad%2C%20Bulevar%20Me%C5%A1e%20Selimovi%C4%87a%202%2C%20Sarajevo%2071000!3m2!1d43.8493736!2d18.3645633!4m5!1s0x4758c99cf8f38f97%3A0x9e67c043a80ca6a9!2sMojmilo%20Brdo%2C%20Sarajevo!3m2!1d43.8374374!2d18.3575821!5e0!3m2!1sbs!2sba!4v1649506861974!5m2!1sbs!2sba`},
    {map: `https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d11507.598813146202!2d18.376859196641306!3d43.85790746583576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x4758c96e290a0463%3A0x4c4c16cdd688d967!2sDom%20zdravlja%20Novi%20Grad%2C%20Bulevar%20Me%C5%A1e%20Selimovi%C4%87a%202%2C%20Sarajevo%2071000!3m2!1d43.8493736!2d18.3645633!4m5!1s0x4758c93362ed0ddd%3A0x7c193995c94ac2db!2zVmVsZcWhacSHaSwgU2FyYWpldm8!3m2!1d43.8695878!2d18.3972481!5e0!3m2!1sbs!2sba!4v1649506908774!5m2!1sbs!2sba`}
    

]

function changeInfo(){

    let index = Math.floor(Math.random() * 5)

    console.log(index)
    
    loc.innerHTML = `Lokacija: ${names[index].location}`
    name.innerHTML = `Ime: ${names[index].name}`
    last.innerHTML = `Prezime: ${names[index].lastName}`
    phone.innerHTML = `Telefon: ${names[index].phone}`

    frame.src = maps[index].map




}



