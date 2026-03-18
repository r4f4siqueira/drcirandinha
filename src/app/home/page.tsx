import { AvatarCirandinha } from '@/components/AvatarCirandinha';
import { SocialMidiasCirandinha } from '@/components/SocialMidiasCirandinha';
import { Box, Heading, Link } from '@chakra-ui/react';
import { ExpandableText } from './components/ExpandableText';
import { SchedulesBroadcast } from './components/SchedulesBroadcast';
import { HelpInfo } from './components/HelpInfo';

export default function HomePage() {
    return (
        <Box>
            <AvatarCirandinha />
            <SocialMidiasCirandinha />
            <Box padding={[2, 2, 4, 8]}>
                <Heading>Dr. Cirandinha</Heading>
                <ExpandableText>
                    Streamer (nada)conhecido por suas transmissões descontraídas de jogos competitivos como{' '}
                    <Link
                        href={'https://www.dota2.com/home'}
                        target="_blank"
                        color="red.600"
                        fontWeight={'bold'}
                    >
                        Dota 2
                    </Link>{' '}
                    e algumas raras vezes onde ele joga ou explica algo adverso;{'\n\n'}
                    Engenheiro de software nas horas vagas (vulgo, minha fonte de renda principal), faço lives
                    esporádicas para descontrair e passar o tempo. {'\n\n'}
                    Presente nas plataformas desde meados de 2019 de forma não profissional, uso as transmissões como
                    aprendizado seja sobre os jogos em si ou sobre configurações técnicas, integrações e streaming.
                </ExpandableText>
            </Box>
            <Box padding={[2, 2, 4, 8]}>
                <HelpInfo />
                <SchedulesBroadcast />
            </Box>
        </Box>
    );
}
