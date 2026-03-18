import { Center, Image } from '@chakra-ui/react';

export function AvatarCirandinha() {
    return (
        <Center>
            <Image
                mt={[10, 10, 20, 24]}
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
