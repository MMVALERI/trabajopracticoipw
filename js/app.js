function toggleModo() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("modo", "oscuro");
  } else {
    localStorage.setItem("modo", "claro");
  }
}

window.onload = () => {
  const modo = localStorage.getItem("modo");
  if (modo === "oscuro") document.body.classList.add("dark");
};

document.getElementById("formContacto").addEventListener("submit", function(event){
    event.preventDefault();

    alert("✅ Tu consulta ha sido enviada. ¡Gracias por comunicarte con nosotros!");
    
    this.reset();
});