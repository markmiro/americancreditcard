import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/index.css";
import { Nav } from "../components/nav";
import { VariablesProvider } from "../components/variablesContext";

const RedStripe = () => (
  <div
    style={{
      borderBottom: "2px solid var(--red)",
      marginTop: "2px",
    }}
  />
);

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <VariablesProvider>
      <div
        className="d-flex mx-auto flex-column"
        style={{
          minHeight: "100vh",
          borderTop: "4px solid var(--brand)",
          // Relative so positioned bg doesn't overlap content
          position: "relative",
        }}
      >
        <Nav />
        <div className="flex-grow-1 pt-5 pb-5 d-flex arg-bg">
          <div
            key={router.pathname}
            className="container-sm arg-slide-fade-in"
            style={{ maxWidth: "600px" }}
          >
            <pre>{JSON.stringify(Component, null, "  ")}</pre>
            {/* <div className="bg-white p-4"> */}
            <Component {...pageProps} />
            {/* </div> */}
          </div>
        </div>
        <RedStripe />
        <RedStripe />
        <RedStripe />
        <footer className="text-center text-secondary">
          <div className="inner">
            <div className="pb-3" />
            <p>American Credit Card © {new Date().getFullYear()}</p>
          </div>
        </footer>
      </div>
    </VariablesProvider>
  );
}
