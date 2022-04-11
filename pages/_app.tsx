import type { AppProps } from "next/app";
import * as React from "react";
import { Header } from "@nvs-widget/Header";
import "../styles/global.css";
import { InvoiceDataProvider } from "@nvs-context/InvoiceContext";
import { ClientDataProvider } from "@nvs-context/ClientModifyContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FSClientProvider } from "@nvs-context/FSClientContext";
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyDNuVu277g1F50HB2KGKaEVsq1lWVWKZEM",
  authDomain: "nadine-s-verbier-invoice-app.firebaseapp.com",
  projectId: "nadine-s-verbier-invoice-app",
  storageBucket: "nadine-s-verbier-invoice-app.appspot.com",
  messagingSenderId: "96919594811",
  appId: "1:96919594811:web:5f53d4bb0524ccc999791e",
};

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
    <ThemeProvider theme={theme}>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Header>
          <FSClientProvider>
            <InvoiceDataProvider>
              <ClientDataProvider>
                <Component {...pageProps} />
              </ClientDataProvider>
            </InvoiceDataProvider>
          </FSClientProvider>
        </Header>
      </FirebaseAppProvider>
    </ThemeProvider>
  );
}

export default MyApp;
