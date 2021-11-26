import { useState, keyboardEvent } from 'react' // keyboardEvent -> monitora as teclas do teclado do user

import * as C from './styles'

type Props = {
    onEnter: (taskName: string) => void // voide -> função que não retorna nada, estou passando uma função pq tá sendo enviada uma funçã
                                       // pelo arqivo App.tsx
}

export const AddArea = ({ onEnter }: Props ) => {

    const [inputText, setInputText] = useState('')

    // Função para quando o user apertar a tecla enter seja adicionado uma nova tarefa
    // e: keyboardEvent -> estou dizendo que o type desse parãmetro é keyboardEvent, no typescript ao usar
    // parãmetros devemos informar a tipo ou type desse parãmetro
    const handleKeyUp = (e: keyboardEvent) => {
        if (e.code === 'Enter' && inputText !== '') {
            onEnter(inputText)
            setInputText('')
        }   
    }

    return (
        <C.Container>
            <div className="image">+</div>
            <input
                type="text"
                placeholder="Adicione uma tarefa"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />    
        </C.Container>
    )
}