react-pdf-print
----

Prints web pages into multipage pdf file

### Installation

Install the component with Npm or Yarn

```sh
$ npm i react-pdf-print
```
or
```sh
$ yarn add react-pdf-print
```

### Usage
To create a new app run
```
npx create-react-app example
```
then contain your div into the printer component
```
import React, { Component } from 'react';
import Printer, { print } from 'react-pdf-print'

const ids = ['1']

class App extends Component{
  render() {
    return (
      <div className='App'>
        <Printer>
            <div id={ids[0]} style={{ width:'210mm', height: '297mm' }}>
                Hello World!
            </div>
        </Printer>
        <input type='button' style={{ position: 'relative', float: 'right' }}
          onClick={() => print(ids[0])} value='Stampa' />
      </div>
    )
  }
}

export default App
```

### Todos

 - Multiple pages dimensions (A0, A1, A2, A3, ...)

License
----
MIT

Authors
----

[Francesco Chiapello @framesystem](https://framesystem.it)
