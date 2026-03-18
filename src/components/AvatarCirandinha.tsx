import { Center, Image } from '@chakra-ui/react';

export const AvatarCirandinha = () => {
    return (
        <Center>
            <Image
                mt={10}
                src="/DrCirandinhaFire.png"
                alt="Dr. Cirandinha"
                title="Dr. Cirandinha"
                boxSize={200}
                borderRadius={'full'}
                fit={'cover'}
            />
        </Center>
    );
}
