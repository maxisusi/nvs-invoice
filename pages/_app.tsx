import type { AppProps } from "next/app";
import * as React from "react";
import { Header } from "@nvs-widget/Header";
import Container from "@mui/material/Container";
import "../styles/global.css";
import { InvoiceDataProvider } from "@nvs-context/InvoiceContext";
import { ClientDataProvider } from "@nvs-context/ClientModifyContext";

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
