function elem(){
    console.log("working")
}   



function closeAll(){
    var sandes =  document.querySelector(".sandes");
    var entradas =  document.querySelector(".entradas");
    var sopas =  document.querySelector(".sopas");
    var omoletes =  document.querySelector(".omoletes");
    var peixe =  document.querySelector(".peixe");
    var carne =  document.querySelector(".carne");
    closeListing(sandes)
    closeListing(entradas)
    closeListing(sopas)
    closeListing(omoletes)
    closeListing(peixe)
    closeListing(carne)
}


function closeListing(close){
    close.classList.add("d-none")
    close.nextElementSibling.classList.add("d-none")
}

function openSandes(){
    closeAll()
    var sandes =  document.querySelector(".sandes");
    sandes.classList.remove("d-none")
    sandes.nextElementSibling.classList.remove("d-none")
    var buttonToRemove =  document.querySelector(".btn-dark");
    buttonToRemove.classList.remove("btn-dark")
    buttonToRemove.classList.add("btn-light")
    var buttonToAdd =  document.querySelector("#sandes");
    buttonToAdd.classList.remove("btn-light")
    buttonToAdd.classList.add("btn-dark")
}
function openEntradas(){
    closeAll()
    var entradas =  document.querySelector(".entradas");
    entradas.classList.remove("d-none")
    entradas.nextElementSibling.classList.remove("d-none")
    var buttonToRemove =  document.querySelector(".btn-dark");
    buttonToRemove.classList.remove("btn-dark")
    buttonToRemove.classList.add("btn-light")
    var buttonToAdd =  document.querySelector("#entradas");
    buttonToAdd.classList.remove("btn-light")
    buttonToAdd.classList.add("btn-dark")
}
function openSopas(){
    closeAll()
    var sopas =  document.querySelector(".sopas");
    sopas.classList.remove("d-none")
    sopas.nextElementSibling.classList.remove("d-none")
    var buttonToRemove =  document.querySelector(".btn-dark");
    buttonToRemove.classList.remove("btn-dark")
    buttonToRemove.classList.add("btn-light")
    var buttonToAdd =  document.querySelector("#sopas");
    buttonToAdd.classList.remove("btn-light")
    buttonToAdd.classList.add("btn-dark")
}
function openOmoletes(){
    closeAll()
    var omoletes =  document.querySelector(".omoletes");
    omoletes.classList.remove("d-none")
    omoletes.nextElementSibling.classList.remove("d-none")
    var buttonToRemove =  document.querySelector(".btn-dark");
    buttonToRemove.classList.remove("btn-dark")
    buttonToRemove.classList.add("btn-light")
    var buttonToAdd =  document.querySelector("#omoletes");
    buttonToAdd.classList.remove("btn-light")
    buttonToAdd.classList.add("btn-dark")
}
function openPeixe(){
    closeAll()
    var peixe =  document.querySelector(".peixe");
    peixe.classList.remove("d-none")
    peixe.nextElementSibling.classList.remove("d-none")
    var buttonToRemove =  document.querySelector(".btn-dark");
    buttonToRemove.classList.remove("btn-dark")
    buttonToRemove.classList.add("btn-light")
    var buttonToAdd =  document.querySelector("#peixe");
    buttonToAdd.classList.remove("btn-light")
    buttonToAdd.classList.add("btn-dark")
}
function openCarne(){
    closeAll()
    var carne =  document.querySelector(".carne");  
    carne.classList.remove("d-none")
    carne.nextElementSibling.classList.remove("d-none")
    var buttonToRemove =  document.querySelector(".btn-dark");
    buttonToRemove.classList.remove("btn-dark")
    buttonToRemove.classList.add("btn-light")
    var buttonToAdd =  document.querySelector("#carne");
    buttonToAdd.classList.remove("btn-light")
    buttonToAdd.classList.add("btn-dark")
}


