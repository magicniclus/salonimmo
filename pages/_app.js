import "../styles/globals.css";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-NZ64JVXS",
    };
    TagManager.initialize(tagManagerArgs);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
