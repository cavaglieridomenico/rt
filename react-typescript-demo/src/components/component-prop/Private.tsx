import type { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Max" />;
  } else {
    return <div>Please login to continue</div>;
  }
};

export default Private;
