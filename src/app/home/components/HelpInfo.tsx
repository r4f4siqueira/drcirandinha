import { HeadingAutoSize } from '@/components/HeadingAutoSize';
import { DONATES_LINKS } from '@/constants/donates-links';
import { Box, Link, List, Text } from '@chakra-ui/react';

export const HelpInfo = () => {
    return (
        <Box mt={12}>
            <HeadingAutoSize text="Como Ajudar" />
            <List.Root ml={8}>
                <List.Item>
                    <Text
                        fontSize="lg"
                        color={'yellow'}
                        fontWeight={'bold'}
                    >
                        ASSISTINDO, CURTINDO e COMPARTILHANDO
                    </Text>
                </List.Item>
                <List.Item>
                    <Text fontSize="lg">
                        <Link
                            target="_blank"
                            color="purple.500"
                            fontWeight={'bold'}
                            href={DONATES_LINKS.Midfielder}
                        >
                            MidFielder (livepix):
                        </Link>{' '}
                        Por aqui você pode acompanhar minhas metas, rankings de doações e muito mais.
                    </Text>
                </List.Item>
                <List.Item>
                    <Text fontSize="lg">
                        <Link
                            target="_blank"
                            color="orange"
                            fontWeight={'bold'}
                            href={DONATES_LINKS.Wishlist}
                        >
                            Wishlist Amazon:
                        </Link>{' '}
                        Algumas coisas que pode me ajudar na live ou no meu dia dia.
                    </Text>
                </List.Item>
            </List.Root>
        </Box>
    );
};
