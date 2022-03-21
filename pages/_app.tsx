import type { AppProps } from "next/app";
import * as React from "react";
import { Header } from "./components/header";
import Container from "@mui/material/Container";
import "../styles/global.css";
import { InvoiceDataProvider } from "./components/context/InvoiceContext";
import { ClientDataProvider } from "./components/context/ClientModifyContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Container>
        <InvoiceDataProvider>
          <ClientDataProvider>
            <Component {...pageProps} />
          </ClientDataProvider>
        </InvoiceDataProvider>
      </Container>
    </div>
  );
}

export default MyApp;
