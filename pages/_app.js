import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";
import "../components/styles.css";
import { Nav } from "../components/nav";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div
      className="d-flex mx-auto flex-column text-white"
      style={{
        minHeight: "100vh",
        borderTop: "4px solid var(--brand)",
        // Relative so positioned bg doesn't overlap content
        position: "relative"
      }}
    >
      <Nav />
      <div className="flex-grow-1 pt-5 pb-5 d-flex arg-bg">
        <div
          key={router.pathname}
          className="container-sm arg-slide-fade-in"
          style={{ maxWidth: "540px" }}
        >
          <pre>{JSON.stringify(Component, null, "  ")}</pre>
          <Component {...pageProps} />
        </div>
      </div>
      <footer className="text-center text-secondary">
        <div className="inner">
          <img srcSet="/payment-processors.png 3x" alt="" />
          <div className="pb-3" />
          <p>American River Gold © 2021</p>
        </div>
      </footer>
    </div>
  );
}
