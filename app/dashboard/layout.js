import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import VerticalMenu from "./components/VerticalMenu";

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard flex flex-col h-screen">
      <Navbar />
      <div className="dashboard-content flex flex-row flex-grow">
        <LeftSidebar />
        <VerticalMenu />
        <main className="main-content flex-grow m-2 ">{children}</main>
        <RightSidebar />
      </div>
    </div>
  );
}
