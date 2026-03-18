import { DONATES_LINKS } from "@/constants/donates-links";
import { Box, Heading, Link, Mark, Text } from "@chakra-ui/react";

export const HelpInfo = () => {
  return (
    <Box>
      <Heading>Como pode me Ajudar</Heading>
      <Text color={"yellow.fg"} fontWeight={"bold"}>
        🎥 ASSISTINDO, CURTINDO e COMPARTILHANDO
      </Text>

      <Text>
        <Link
          target="_blank"
          color="purple.500"
          fontWeight={"bold"}
          href={DONATES_LINKS.Midfielder}
        >
          💰 MidFielder
        </Link>
        (livepix), clicando no link você será redirecionado para o site do
        MidFielder, onde pode acompanhar minhas metas, rankings de doações e
        muito mais.
      </Text>

      <Text>
        🎁{" "}
        <Link
          target="_blank"
          color="yellow"
          fontWeight={"bold"}
          href={DONATES_LINKS.Wishlist}
        >
          Wishlist
        </Link>
        , onde qualquer contribuição é super bem-vinda e faz toda a diferença no
        meu trabalho e nas nossas transmissões.
      </Text>
    </Box>
  );
};
