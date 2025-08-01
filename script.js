document.getElementById("postForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // se obtienen los valores del titulo y la descripcion
  const title = document.getElementById("titulo").value.trim();
  const description = document.getElementById("descripcion").value.trim();
  const imageInput = document.getElementById("imagen");

  // si falta el titulo o la descripcion, se muestra un mensaje y se detiene el proceso
  if (!title || !description) {
    alert("por favor completa el titulo y la descripcion.");
    return;
  }

  // se crea un contenedor para la publicacion
  const card = document.createElement("div");
  card.className = "card";

  // se crea el elemento del titulo y se le asigna el texto
  const titleElement = document.createElement("h3");
  titleElement.textContent = title;

  // se crea el elemento de la descripcion
  const descElement = document.createElement("p");
  descElement.textContent = description;

  // se crea el boton de me gusta con contador inicial en 0
  const likeButton = document.createElement("div");
  likeButton.className = "like-btn";
  likeButton.innerHTML = "💜 Me Gusta <span>0</span>";

  // se agrega funcionalidad al boton de me gusta
  likeButton.addEventListener("click", () => {
  likeButton.classList.add("liked");
setTimeout(() => {
  likeButton.classList.remove("liked");
}, 300); // tiempo igual al de tu animacion en ms
// activa animacion
  let count = parseInt(likeButton.querySelector("span").textContent);
  count++; // siempre suma 1
  likeButton.querySelector("span").textContent = count;
});


  // se agregan titulo y descripcion a la tarjeta
  card.appendChild(titleElement);
  card.appendChild(descElement);

  // si el usuario selecciono una imagen, se agrega a la tarjeta
  if (imageInput.files.length > 0) {
    const imageURL = URL.createObjectURL(imageInput.files[0]);
    const image = document.createElement("img");
    image.src = imageURL;
    card.appendChild(image);
  }

  // se agrega el boton de like y se muestra la publicacion al principio del feed
  card.appendChild(likeButton);
  document.getElementById("feed").prepend(card);

  // se limpia el formulario para una nueva publicacion
  document.getElementById("postForm").reset();
});
