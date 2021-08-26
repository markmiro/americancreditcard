/* eslint-disable */
import { useState } from "react";
import Link from "next/link";

export function Nav() {
  const [show, setShow] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{
        boxShadow:
          "0 0.5rem 1rem rgba(0,0,0,0.05),inset 0 -1px 0 rgba(0,0,0,0.15)",
      }}
    >
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">
            <img
              src="/acc-logo.png"
              width="48px"
              style={{
                transform: "translateY(-2px)",
                filter: "drop-shadow(2px 2px 3px #00000033)",
              }}
            />
            <span className="pl-2" />
            American Credit Card
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-label="Toggle navigation"
          onClick={() => setShow((s) => !s)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end ${
            show && "show"
          }`}
        >
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link href="/">
                <a
                  className="nav-link"
                  aria-current="page"
                  onClick={() => setShow(false)}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/faq">
                <a className="nav-link" onClick={() => setShow(false)}>
                  FAQ
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="https://americanrivergold.com/cardholders">
                <a className="nav-link">Load Funds / Check Balance ↗</a>
              </Link>
            </li>
            <div className="pl-3" />
            <li className="nav-item">
              <Link href="/request-card">
                <a
                  className="btn btn-outline-dark btn-block"
                  onClick={() => setShow(false)}
                >
                  Request Card
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
