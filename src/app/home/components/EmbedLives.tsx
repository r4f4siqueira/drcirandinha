import { Box } from '@chakra-ui/react';

export const EmbedLives = () => {
    return (
        <Box
            display={'flex'}
            flexDir={['column', 'column', 'row', 'row']}
            justifyContent={'space-between'}
            padding={[2, 2, 4, 8]}
            gap={4}
        >
            <Box>
                <iframe
                    src="https://player.kick.com/drcirandinha"
                    height="240"
                    width="352"
                />
            </Box>

            <Box>
                <iframe
                    src="https://player.kick.com/drcirandinha"
                    height="240"
                    width="352"
                />
            </Box>
        </Box>
    );
};
