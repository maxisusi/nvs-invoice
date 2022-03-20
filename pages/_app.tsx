import type { AppProps } from "next/app";
import * as React from "react";
import { Header } from "./components/header";
import Container from "@mui/material/Container";
import "../styles/global.css";
import { InvoiceDataProvider } from "./components/context/InvoiceContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Container>
        <InvoiceDataProvider>
          <Component {...pageProps} />
        </InvoiceDataProvider>
      </Container>
    </div>
  );
}

export default MyApp;
