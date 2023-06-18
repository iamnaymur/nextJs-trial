import Sidebar from "./Sidebar";

export const metadata = {
  title: "Dashboard || NEXT HERO",
  description: "NEXT HERO",
};

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex container mx-auto">
      <Sidebar></Sidebar>
      {children}
    </div>
  );
};

export default DashboardLayout;
