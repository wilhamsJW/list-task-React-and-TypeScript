import { useState } from 'react'

import * as C from './App.styles'

import { Item } from './types/Item'

import { ListItem } from './components/ListItem'

import { AddArea } from './components/AddArea'

// import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css";

const App = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Estudar TypeScript', done: true },
    { id: 2, name: 'Estudar React', done: false },
    { id: 3, name: 'Estudar NodeJS', done: true }
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>To Do List</C.Header>

          {/* Adding new Task */}
          <AddArea />  

          {list.map((item, i) => (
            <ListItem key={i} item={item} />
          ))}

      </C.Area>
    </C.Container>
  )
}

export default App;