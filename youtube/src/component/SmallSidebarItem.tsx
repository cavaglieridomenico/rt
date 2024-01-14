import { twMerge } from "tailwind-merge";
import { buttonStyle } from "./Button";

type SmallSidebarItemProps = {
  Icon: React.ElementType;
  url: string;
  title: string;
};

const SmallSidebarItem = ({ Icon, url, title }: SmallSidebarItemProps) => {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyle({ variant: "ghost" }),
        "py-4 px-1 flex flex-col items-center reonded-lg gap-1"
      )}
    >
      <Icon path={url} className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
};

export default SmallSidebarItem;
