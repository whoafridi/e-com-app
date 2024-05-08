import "../../../globals.css";
import { Asidebar } from "../../_components/Asidebar";
// import Header from "../../_components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Asidebar />
      {/* <Header /> */}
      {children}
    </>
  );
}
