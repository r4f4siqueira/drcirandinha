'use client';

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { ColorModeProvider, ColorModeProviderProps } from '../color-mode';

const system = createSystem(defaultConfig, {
    theme: {
        tokens: {
            fonts: {
                heading: { value: 'var(--font-roboto), sans-serif' },
                body: { value: 'var(--font-roboto), sans-serif' },
            },
        },
    },
});

export function Provider(props: ColorModeProviderProps) {
    return (
        <ChakraProvider value={system}>
            <ColorModeProvider {...props} />
        </ChakraProvider>
    );
}
