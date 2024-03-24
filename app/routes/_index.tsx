import type { LinksFunction, MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1 className="text-center text-black font-black text-6xl">Shopper</h1>
      <br/>
      <p className="text-center text-black text-xl font-medium">The only place you'll ever need to shop</p>
    </div>
  );
}
