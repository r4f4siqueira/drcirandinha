import { Box, DataList, Heading } from '@chakra-ui/react';

export function SchedulesBroadcast() {
    return (
        <Box>
            <Heading>Horários das transmissões:</Heading>
            {/* <Text>Todos os dias (ou quase todos)</Text> */}
            <DataList.Root
                orientation={'horizontal'}
                divideY={'2px'}
            >
                <DataList.Item>
                    <DataList.ItemLabel>Segunda-Feira</DataList.ItemLabel>
                    <DataList.ItemValue>20:00</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item>
                    <DataList.ItemLabel>Terça-Feira</DataList.ItemLabel>
                    <DataList.ItemValue>20:00</DataList.ItemValue>
                </DataList.Item>
            </DataList.Root>
        </Box>
    );
}
