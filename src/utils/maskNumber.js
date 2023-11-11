

const maskNumber = (valor) => {
    valor = valor.replace(/\D/g, "")

    return valor
}

export default maskNumber