import { Heading, HeadingProps } from '@chakra-ui/react';

interface HeadingAutoSizeProps extends HeadingProps {
    text: string;
}

/**
 * HeadingAutoSize
 * @description HeadingAutoSize is a component that displays a heading with text that automatically adjusts its size based on the screen size.
 * @param text - The text to display in the heading.
 * @param props - Additional props to pass to the Heading component.
 * @returns A Heading component with text that automatically adjusts its size based on the screen size.
 */
export const HeadingAutoSize = ({ text, ...props }: HeadingAutoSizeProps) => {
    return (
        <Heading
            size={['4xl', '5xl', '6xl', '6xl']}
            {...props}
        >
            {text}
        </Heading>
    );
};
