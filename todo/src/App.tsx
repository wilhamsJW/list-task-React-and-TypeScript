import { useState } from 'react'

import * as C from './App.styles'

import { Item } from './types/Item'

import { ListItem } from './components/ListItem'

import { AddArea } from './components/AddArea'

const App = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Estudar TypeScript', done: true },
    { id: 2, name: 'Estudar React', done: false },
    { id: 3, name: 'Estudar NodeJS', done: true }
  ]);

  const handleAddTask = (inputText: string) => {
    let newList = [...list]
    newList.push({
      id: list.lenght + 1,
      name: inputText,
      done: false
    })
    setList(newList)
  }

  // Função que seta o "done" dentro do array, quando o usuário clikar no checkbox para marcar como feito
  // o "done" deve ser true e se tiver desmarcado o done deve ser false
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>To Do List</C.Header>

        {/* Adding new Task */}
        <AddArea onEnter={handleAddTask} />

        {/* Listando dados */}
        {list.map((item, i) => (
          <ListItem
            key={i}
            item={item}
            sendFunction={handleTaskChange} // enviando função para ListItem para que ListItem me retorne os dados necessários para a função rodar
          />
        ))}

      </C.Area>
    </C.Container>
  )
}

export default App;