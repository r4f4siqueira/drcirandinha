import { SOCIAL_MIDIAS } from '@/constants/social-midias';
import { Center, Link } from '@chakra-ui/react';
import { FaInstagram, FaKickstarterK, FaTiktok, FaTwitch, FaXTwitter, FaYoutube } from 'react-icons/fa6';

export const SocialMidiasCirandinha = () => {
    return (
        <Center
            mt={[4, 4, 8, 12]}
            gap={[1, 2, 8, 12]}
        >
            <Link
                href={SOCIAL_MIDIAS.Twitch}
                target="_blank"
            >
                <FaTwitch
                    color="#6441a5"
                    size={56}
                />
            </Link>

            <Link
                href={SOCIAL_MIDIAS.Kick}
                target="_blank"
            >
                <FaKickstarterK
                    color="lime"
                    size={56}
                />
            </Link>

            <Link
                href={SOCIAL_MIDIAS.Youtube}
                target="_blank"
            >
                <FaYoutube
                    color="red"
                    size={56}
                />
            </Link>

            <Link
                href={SOCIAL_MIDIAS.X}
                target="_blank"
            >
                <FaXTwitter
                    color="white"
                    size={56}
                />
            </Link>

            <Link
                href={SOCIAL_MIDIAS.Instagram}
                target="_blank"
            >
                <>
                    {/* 1. Define the SVG Gradient */}
                    <svg
                        width="0"
                        height="0"
                    >
                        <linearGradient
                            id="blue-gradient"
                            x1="100%"
                            y1="100%"
                            x2="0%"
                            y2="0%"
                        >
                            <stop
                                stopColor="#fdf497"
                                offset="0%"
                            />
                            <stop
                                stopColor="#fd5949"
                                offset="25%"
                            />
                            <stop
                                stopColor="#d6249f"
                                offset="50%"
                            />
                            <stop
                                stopColor="#285AEB"
                                offset="100%"
                            />
                        </linearGradient>
                    </svg>

                    {/* 2. Use the Icon and reference the gradient ID */}
                    {/* Note: Some libraries/icons use 'stroke', others use 'fill' */}
                    <FaInstagram
                        style={{ fill: 'url(#blue-gradient)' }}
                        size={56}
                    />
                </>
            </Link>

            <Link
                href={SOCIAL_MIDIAS.Tiktok}
                target="_blank"
            >
                <FaTiktok
                    color="white"
                    size={56}
                />
            </Link>
        </Center>
    );
};
