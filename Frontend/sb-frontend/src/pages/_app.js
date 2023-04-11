import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BaseLayout from "../../components/layouts/Base";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <ToastContainer />
      <BaseLayout router={router} key={router.router}>
        <Component {...pageProps} />
      </BaseLayout>
    </>
  );
}
