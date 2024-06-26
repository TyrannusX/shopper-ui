import {
  Link,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import styles from "./tailwind.css?url";
import { Button, Navbar, DarkThemeToggle, Flowbite } from "flowbite-react";

export const links: LinksFunction = () => [
  {rel: "stylesheet", href: styles}
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div>
      <Flowbite>
        <Navbar fluid rounded>
          <Navbar.Brand as={Link} href="https://google.com">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Shopper</span>
          </Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse>
            <Navbar.Link as={NavLink} to="">Home</Navbar.Link>
            <Navbar.Link as={NavLink} to="products">Products</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
        <br/>
        <Outlet />
        <DarkThemeToggle className="fixed bottom-0 left-0"/>
      </Flowbite>
    </div>
  );
}
