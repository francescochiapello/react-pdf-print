react-pdf-print
----

This component prints web page into multipage pdf file

### Installation

Install the component with Npm

```sh
$ npm i react-pdf-print
```
or Yarn
```sh
$ yarn add react-pdf-print
```

### Usage
To create a new app run
```sh
$ npx create-react-app example
```
then include your divs into the Printer component. To print the page you must to call the print() method that expects an array of ids as param. In this first beta release you must to specify the div dimension in order to print A4 document.
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
          onClick={() => print(ids)} value='Stampa' />
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
