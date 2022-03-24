
const btn = document.querySelector(`#submit`)

 btn.addEventListener('click', event => {
     event.preventDefault();

     const titulo = document.getElementById('nome').value
     document.getElementById('titulo').innerText = titulo

     const descricao = document.getElementById('descricao').value
     document.getElementById('descricao2').innerText = descricao

     
     const urlImagem = document.getElementById('imagem').value
     var img = document.createElement("IMG");
     img.src = urlImagem
     img.style.width = "600px";
     img.style.height = "500px";
     document.getElementById('imagens').appendChild(img);

 })

 