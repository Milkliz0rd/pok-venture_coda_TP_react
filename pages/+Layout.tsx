import "./Layout.css";
import "./tailwind.css";
import { Nav } from "@/components/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex-1 w-full flex">{children}</div>
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container" className="w-full h-full">
      <div
        id="page-content"
        className="min-h-full w-full flex flex-col items-center p-0"
      >
        {children}
      </div>
    </div>
  );
}
