import "./Layout.css";
import "./tailwind.css";
import logoUrl from "@/assets/logo.svg";
import { Nav } from "@/components/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"flex flex-col max-w-5xl p-5 mx-auto"}>
      <Nav />
      <Content>{children}</Content>
    </div>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="sidebar"
      className={"p-5 flex flex-col shrink-0 border-r-2 border-r-gray-200"}
    >
      {children}
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container">
      <div id="page-content" className={"p-5 pb-12 min-h-screen w-100% flex flex-col align-items-center"}>
        {children}
      </div>
    </div>
  );
}
