import { Clapperboard, Home, Library, Repeat } from "lucide-react";
import SmallSidebarItem from "../component/SmallSidebarItem";

const Sidebar = () => {
  return (
    <div>
      <SmallSidebarItem Icon={Home} url="/" title="Home" />
      <SmallSidebarItem Icon={Repeat} url="/shorts" title="Shorts" />
      <SmallSidebarItem
        Icon={Clapperboard}
        url="/subscription"
        title="Subscription"
      />
      <SmallSidebarItem Icon={Library} url="/library" title="Library" />
    </div>
  );
};

export default Sidebar;
