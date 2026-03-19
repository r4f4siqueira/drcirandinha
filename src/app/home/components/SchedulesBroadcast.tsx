import { HeadingAutoSize } from '@/components/HeadingAutoSize';
import { Box, DataList } from '@chakra-ui/react';

export const SchedulesBroadcast = () => {
    return (
        <Box mt={12}>
            <HeadingAutoSize text="Horários das Lives:" />

            <DataList.Root
                orientation={'horizontal'}
                divideY={'2px'}
                mt={4}
            >
                <DataList.Item>
                    <DataList.ItemLabel color={'lime'}>Segunda-Feira</DataList.ItemLabel>
                    <DataList.ItemValue>
                        20:00 Com Dota 2, rage, raiva, alegria, itens pix e amigos ou inimigos...
                    </DataList.ItemValue>
                </DataList.Item>
                <DataList.Item>
                    <DataList.ItemLabel color={'orange'}>Terça-Feira</DataList.ItemLabel>
                    <DataList.ItemValue>
                        20:00 Dota 2, Desenvolvimento / Dúvidas em relaçao a computadores, lives e games.
                    </DataList.ItemValue>
                </DataList.Item>
                <DataList.Item>
                    <DataList.ItemLabel color={'red'}>Sexta-Feira</DataList.ItemLabel>
                    <DataList.ItemValue>20:00 Não tenho idéia doque pode acontecer</DataList.ItemValue>
                </DataList.Item>
            </DataList.Root>
        </Box>
    );
};
