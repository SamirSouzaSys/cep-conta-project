'use client'

import ContaRead from "@/components/ContaRead";
import { useEffect, useMemo, useState } from "react";
import { PropsConta } from "../types/types";
import {getConta, deleteConta as delConta} from "../utils/axiosConta";
import '../globals.css'

export default function Conta() {

    const [contas, setContas] = useState<PropsConta[]>()
    const [contaDeletada, setContaDeletada] = useState<string>('')

    const deleteConta = (id:number) => {

        let text = "Você pretende apagar a conta de Id = "+id+"\nPressione OK para CONFIRMAR ou CANCELAR.";
        if (confirm(text) != true)
            return

        delConta(id)
        .then((response) => {
            setContaDeletada(response)
            readConta()
        })
        .catch((e:Error) => console.log('cause: '+e.cause + ' - message: '+e.message + ' - name: '+e.name + ' - stack: '+e.stack))    
    }

    const readConta = () => {
        getConta()
        .then((response) => setContas(response.data))
        .catch((e:Error) => console.log('cause: '+e.cause + ' - message: '+e.message + ' - name: '+e.name + ' - stack: '+e.stack))
    }

    useMemo(()=>{
        readConta()
    },[])

    return (
        <>
            <h1>Gerenciador de Contas</h1>
            <main>
                {/* C */}
                {/* R - D */}
                <h3>
                    Lista de Contas
                </h3>
                {
                    contas?.map((item) => (
                        <ContaRead key={item.nome} id={item.id} nome={item. nome} descricao={item.descricao} onDeleteItemClick={deleteConta}/>
                    ))
                }
                {/* U */}
                

            </main>
        </>
        
    )
}