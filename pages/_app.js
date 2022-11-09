import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "../styles/globals.css";
// ..
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
