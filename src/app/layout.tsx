import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Box, Center } from "@chakra-ui/react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr Cirandinha",
  description:
    "Site do Streamer Dr Cirandinha, feito para facilitar a interação com a comunidade e divulgar as lives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={roboto.variable}>
      <body>
        <Provider>
          <Center p={4}>
            <Box maxW={"1820px"}>{children}</Box>
          </Center>
        </Provider>
      </body>
    </html>
  );
}
