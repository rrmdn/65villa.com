import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import { ConfigProvider, ThemeConfig } from "antd/lib";

const theme: ThemeConfig = {
  token: {
    fontFamily: "Inter, sans-serif",
    fontSize: 15,
    colorPrimary: "#ED4C67", //
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ConfigProvider theme={theme}>
      <NextIntlClientProvider
        locale={router.locale}
        timeZone="Europe/Vienna"
        messages={pageProps.messages}
      >
        <Component {...pageProps} />
      </NextIntlClientProvider>
    </ConfigProvider>
  );
}
