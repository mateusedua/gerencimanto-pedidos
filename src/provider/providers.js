'use client'

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import '@fontsource/roboto';
import '@fontsource/open-sans';

const theme = extendTheme({
    fonts: {
        body: `"Roboto","sans-serif"`
    }
})

export function Providers({ children }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
}