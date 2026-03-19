import { SOCIAL_MIDIAS } from "@/constants/social-midias";
import { Center, Link } from "@chakra-ui/react";
import {
  FaInstagram,
  FaKickstarterK,
  FaTiktok,
  FaTwitch,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const SocialMidiasCirandinha = () => {
  return (
    <Center mt={[4, 4, 8, 12]} gap={[1, 2, 8, 12]}>
      <Link href={SOCIAL_MIDIAS.Twitch} target="_blank">
        <FaTwitch color="RebeccaPurple" size={56} />
      </Link>

      <Link href={SOCIAL_MIDIAS.Kick} target="_blank">
        <FaKickstarterK color="lime" size={56} />
      </Link>

      <Link href={SOCIAL_MIDIAS.Youtube} target="_blank">
        <FaYoutube color="red" size={56} />
      </Link>

      <Link href={SOCIAL_MIDIAS.X} target="_blank">
        <FaXTwitter color="white" size={56} />
      </Link>

      <Link href={SOCIAL_MIDIAS.Instagram} target="_blank">
        <FaInstagram color="purple" size={56} />
      </Link>

      <Link href={SOCIAL_MIDIAS.Tiktok} target="_blank">
        <FaTiktok color="white" size={56} />
      </Link>
    </Center>
  );
};
