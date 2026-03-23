import { Avatar, Box, HStack, Link, Text } from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const FooterCirandinha = () => {
    return (
        <Box
            bg={'orange'}
            minH={'100px'}
        >
            <Box
                maxW={'1820px'}
                display={'flex'}
                justifyContent={'space-between'}
                flexDir={['column', 'column', 'row', 'row']}
                alignItems={'center'}
                padding={[2, 2, 4, 8]}
            >
                <HStack>
                    <Avatar.Root size={'xs'}>
                        <Avatar.Fallback name="Dr Cirandinha" />
                        <Avatar.Image src="/DrCirandinhaFire.png" />
                    </Avatar.Root>
                    <Box>
                        <Text>
                            By{' '}
                            <Link
                                color={'red'}
                                href="https://www.r4f4siqueira.com"
                                fontWeight={'bold'}
                                target="_blank"
                            >
                                Rafael Siqueira
                                <FaExternalLinkAlt size={8} />
                            </Link>
                        </Text>
                        <Text>Site em Desenvolvimento</Text>
                    </Box>
                </HStack>
                <HStack>
                    <Box>
                        <Text>© 2026 - Desenvolvido para a comunidade do Dr Cirandinha ❤️</Text>
                    </Box>
                </HStack>
            </Box>
        </Box>
    );
};
