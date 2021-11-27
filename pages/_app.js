import '../styles/globals.css'
import { useRouter } from "next/router";
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  size:4,
  color:"#FE595E",
  className:"z-50",
  delay:100,
});

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  // router.events.on("routeChangeStart", progress.start);
  // router.events.on("routeChangeComplete", progress.finish);
  // router.events.on("routeChangeError", progress.finish);
  return <Component {...pageProps} />
}

export default MyApp
