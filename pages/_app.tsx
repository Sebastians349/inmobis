import "../globals.css";
import type { AppProps } from "next/app";
import theme from "../theme";
import {
  ChakraProvider,
  Stack,
  Container,
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Link,
  Divider,
} from "@chakra-ui/react";

export const INFORMATION = {
  // ojo con enrutar via /public porque no lo toma de esa manera. Lo mismo pasa en el JSON
  avatar: "/assets/avatar.jpg",
  banner: "/assets/banner.jpg",
  title: "Estefanía de Mónaco",
  description: "Remax partner",
  phone: `5491141414141`,
  // sheet: `https://docs.google.com/spreadsheets/d/e/2PACX-1vQG1pOSbGxaJYzlOWF2t7KFyP5wtWo_EDS0crTllQtALvDDZBq7OwxvTDJwM4dmasW7wmNh6KFB443j/pub?output=csv`,
  color: `teal`,
  social: [
    {
      name: "instagram",
      url: `https://instagram.com/`,
    },
    {
      name: "whatsapp",
      url: `https://wa.me/5491141414141`,
    },
  ],
};

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container
        backgroundColor="white"
        borderRadius="sm"
        maxWidth="container.xl"
        padding={4}
      >
        <Stack spacing={8}>
          <Stack marginBottom={4} spacing={4}>
            <Image
              borderRadius="lg"
              height="100%"
              maxHeight={64}
              objectFit="cover"
              src={INFORMATION.banner}
              alt="banner"
            />
            <Stack
              alignItems="center"
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 3, sm: 6 }}
            >
              <Box
                backgroundColor="white"
                borderRadius={9999}
                marginTop={{ base: -12, sm: -16 }}
                minWidth={{ base: 24, sm: 32 }}
                padding={1}
              >
                <Image
                  borderRadius={9999}
                  height={{ base: 24, sm: 32 }}
                  src={INFORMATION.avatar}
                  width={{ base: 24, sm: 32 }}
                  alt="avatar"
                />
              </Box>
              <Stack
                alignItems={{ base: "center", sm: "flex-start" }}
                spacing={3}
                textAlign={{ base: "center", sm: "left" }}
              >
                <Stack spacing={0}>
                  <Heading>{INFORMATION.title}</Heading>
                  <Text color="gray.500" fontWeight="500">
                    {INFORMATION.description}
                  </Text>
                </Stack>
                <Stack direction="row">
                  {INFORMATION.social.map((social) => (
                    <Link key={social.name} isExternal href={social.url}>
                      <Flex
                        alignItems="center"
                        backgroundColor="primary.500"
                        borderRadius={9999}
                        color="white"
                        height={10}
                        justifyContent="center"
                        width={10}
                      >
                        <Image
                          alt={social.name}
                          src={`https://icongr.am/fontawesome/${social.name}.svg?size=24&color=ffffff`}
                        />
                      </Flex>
                    </Link>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Component {...pageProps} />
        </Stack>
        <Divider marginY={4} />

        <Text textAlign="center">
          © Copyright {new Date().getFullYear()}. Hecho con ♥ para la comunidad,
          por{" "}
          <Link isExternal href="https://gonzalopozzo.com">
            goncy
          </Link>
          .
        </Text>
      </Container>
    </ChakraProvider>
  );
}

export default App;
