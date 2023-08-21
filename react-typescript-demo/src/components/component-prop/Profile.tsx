export type ProfileProps = {
  name: string;
};

const Profile = ({ name }: ProfileProps) => {
  return <div>Private Profile of {name}</div>;
};

export default Profile;
