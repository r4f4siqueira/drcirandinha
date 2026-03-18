import { AvatarCirandinha } from '@/components/AvatarCirandinha';
import { SocialMidiasCirandinha } from '@/components/SocialMidiasCirandinha';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function HomePage() {
    return (
        <Box>
            <AvatarCirandinha />
            <SocialMidiasCirandinha />
            <Box
                mt={[4, 4, 8, 12]}
                padding={[2, 2, 4, 8]}
            >
                <Heading>Dr. Cirandinha</Heading>
                <Text
                    textAlign={'justify'}
                    mt={2}
                >
                    Streamer (nada)conhecido por transmissões descontraídas de jogos competitivos como Dota 2 e de
                    sobrevivência.
                </Text>
                <Text
                    textAlign={'justify'}
                    mt={2}
                >
                    Engenheiro de software nas horas vagas (vulgo, minha fonte de renda principal), faço lives
                    esporádicas para descontrair e passar o tempo.
                </Text>
                <Text
                    textAlign={'justify'}
                    mt={2}
                >
                    Presente nas plataformas desde meados de 2019 de forma não profissional, uso as transmissões como
                    aprendizado seja sobre os jogos em si ou sobre configurações técnicas, integrações e streaming.
                </Text>
            </Box>
        </Box>
    );
}
