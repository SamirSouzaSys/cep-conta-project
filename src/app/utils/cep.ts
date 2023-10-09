export function validaCep(cepSearch: string){
    const cepValido = /^[0-9]{8}$/;
    return cepValido.test(cepSearch)
}