let conteo = 0;

const txtContador = document.getElementById("numero-contador");

function incrementar() {
    conteo++;
    console.log(`📈 Contador incrementado. Valor actual: ${conteo}`);
    actualizarPantalla();
}

function decrementar() {
    conteo--;
    console.log(`📉 Contador decrementado. Valor actual: ${conteo}`);
    actualizarPantalla();
}

function actualizarPantalla() {

    txtContador.textContent = conteo;

    if (conteo >= 10) {
        txtContador.classList.add("limite-alcanzado");
    } else {
        txtContador.classList.remove("limite-alcanzado");
    }
}