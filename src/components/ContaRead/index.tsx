import { PropsConta } from '@/app/types/types'
import './styles.css'
import { MouseEventHandler } from 'react'

const ContaRead = ({id, nome, descricao, onDeleteItemClick}: PropsConta) => {

    const onClickDeleteItem: MouseEventHandler = () => {
        onDeleteItemClick(id)
    }

    return (
        <div className='divRow'>
            <div className="id">
                {id}
            </div>
            <div className="nome">
                {nome}
            </div>
            <div className="descricao">
                {descricao}
            </div>
            <div>
                <input type="button" value="apagar"
                onClick={onClickDeleteItem}/>
            </div>
        </div>
    )
}

export default ContaRead