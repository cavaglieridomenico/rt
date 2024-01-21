import { Clapperboard, Home, Library, Repeat } from "lucide-react";
import SmallSidebarItem from "../component/SmallSidebarItem";

const Sidebar = () => {
  return (
    <>
      <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
        <SmallSidebarItem Icon={Home} url="/" title="Home" />
        <SmallSidebarItem Icon={Repeat} url="/shorts" title="Shorts" />
        <SmallSidebarItem
          Icon={Clapperboard}
          url="/subscription"
          title="Subscription"
        />
        <SmallSidebarItem Icon={Library} url="/library" title="Library" />
      </aside>
      <aside className="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col gap-2 px-2"></aside>
    </>
  );
};

export default Sidebar;
