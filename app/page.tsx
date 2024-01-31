import { Now } from "./now";

export default function Home() {
  return <Now now={new Date()} data-superjson></Now>;
}
