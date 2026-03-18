'use client';

import { Box, Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

interface ExpandableTextProps {
    children: React.ReactNode;
}

export const ExpandableText = ({ children }: ExpandableTextProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Box >
            <Text
                textAlign={'justify'}
                lineClamp={isExpanded ? undefined : 2}
                whiteSpace="pre-wrap"
            >
                {children}
            </Text>
            <Button
                variant="ghost"
                size="xs"
                onClick={() => setIsExpanded(!isExpanded)}
                colorPalette="yellow"
                mt={2}
                padding={0}
                height="auto"
                _hover={{ bg: 'transparent', textDecoration: 'underline' }}
            >
                {isExpanded ? 'Ver Menos' : 'Ver Mais'}
            </Button>
        </Box>
    );
};
