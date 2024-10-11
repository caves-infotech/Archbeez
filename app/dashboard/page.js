import Floors from "./components/Floors";
import ProjectDetail from "./components/ProjectDetail";

export default function DashboardPage() {
  return (
    <div className=" w-[58%] mt-16 ml-auto mr-auto overflow-y-auto">
      <ProjectDetail />
      <Floors />
    </div>
  );
}
