'use client'

import { useEffect, useState } from 'react'
import './globals.css'
import fetchCep from './utils/axiosCep'
import { validaCep } from './utils/cep'

type cepType = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export default function Home() {

  const [cepResult, setCepResult] = useState<cepType | undefined>()
  const [cepSearch, setCepSearch] = useState<string>('')
  const [cepErro, setCepErro] = useState(false)
  
  function getCep(value:string) {    
    fetchCep(cepSearch)
    .then((response) => setCepResult(response.data))
    .catch(() => setCepErro(true)) 
  }

  useEffect(() => {    
    if(validaCep(cepSearch)){
      getCep(cepSearch)
    } else {
      setCepResult(undefined)
    }
  },[cepSearch])
  
  return (
    <main>
      <div className="search">
      <h1>Pesquise o cep desejado</h1>
      <input name="cep" type="number" inputMode='numeric' onChange={e => setCepSearch(e.target.value)}/>

      </div>
      <div>
        <h3>Resultado do CEP -> <span className={`${cepSearch.length != 8  ? "redText":""}`}>
          {cepSearch}
          </span>
          </h3>
        {
          cepResult && cepResult.cep ? 
            <div>
              <p>cep: {cepResult.cep}</p>
              <p>logradouro: {cepResult.logradouro}</p>
              <p>complemento: {cepResult.complemento}</p>
              <p>bairro: {cepResult.bairro}</p>
              <p>localidade: {cepResult.localidade}</p>
              <p>uf: {cepResult.uf}</p>
              <p>ibge: {cepResult.ibge}</p>
              <p>gia: {cepResult.gia}</p>
              <p>ddd: {cepResult.ddd}</p>
              <p>siafi: {cepResult.siafi}</p>
            </div>
          :
          cepSearch.length > 7 &&
            <div>
              <p>Não encontrado!</p>
            </div>
        }
      </div>
    </main>
  )
}
