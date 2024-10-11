import Floors from "./components/Floors";
import ProjectDetail from "./components/ProjectDetail";

export default function DashboardPage() {
  return (
    <div className=" w-[55%] mt-16 ml-auto mr-[17.5rem] overflow-y-auto">
      <ProjectDetail />
      <Floors />
    </div>
  );
}
