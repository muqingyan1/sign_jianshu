import ReactDOM from 'react-dom';
// import { ChakraProvider, CSSReset } from '@chakra-ui/core'
import { ChakraProvider } from "@chakra-ui/react"
import theme from '@chakra-ui/theme'

import App from './App';
console.log(theme)

ReactDOM.render(
    < ChakraProvider theme={theme} >
        <App />
    </ChakraProvider>,
    document.getElementById('root')
);

