import * as C from './styles'

import { Item } from '../../types/Item'

// Com typescript precisamos informar o tipo da props q vamos usar
// e esse tipo é definido em types/Item 
type Props = {
    item: Item,
    sendFunction: (id: number, done: boolean) => void
}

export const ListItem = ({ item, sendFunction }: Props) => {

    return (
        <C.Container done={item.done}> {/* Enviando prop done={isChecked} para o css validar */}
            <input 
                type='checkbox'
                checked={item.done}
                onChange={e => sendFunction(item.id, e.target.checked)} // passando parametros para a função handleTaskChange(), essa função é responsável por setar
                                                                   // o "done" dentro do array, no caso se precisasse salvar em uma api
                                                                  // sendFunction -> é o nome do atributo que estamos levando essas mudanças, poderia ser qq nome 
                                                                 // o ListeItem que é este arquivo, está recebendo parãmetro do App.tsx e um dos parametros é uma função
                                                                // essa é a função sendo enviada para listItem do App.tsx -> onChange={handleTaskChange} 
            />
            <label>{item.name}</label>
        </C.Container>
    )
}