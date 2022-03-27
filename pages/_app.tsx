import type { AppProps } from "next/app";
import * as React from "react";
import { Header } from "@nvs-widget/Header";
import Container from "@mui/material/Container";
import "../styles/global.css";
import { InvoiceDataProvider } from "@nvs-context/InvoiceContext";
import { ClientDataProvider } from "@nvs-context/ClientModifyContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SideBar } from "@nvs-widget/SideBar";
import { Box } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#406a64",
      dark: "#001a14",
      main: "#143f3a",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f28157",
      light: "#ffb285",
      dark: "#bb522c",
      contrastText: "#000000",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />

        <Box sx={{ display: "flex" }}>
          <SideBar />
          <Container sx={{ mt: 10 }}>
            <InvoiceDataProvider>
              <ClientDataProvider>
                <Component {...pageProps} />
              </ClientDataProvider>
            </InvoiceDataProvider>
          </Container>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
