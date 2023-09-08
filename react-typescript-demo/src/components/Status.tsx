type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  let message: string = "";
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched succefully";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return <div>{message}</div>;
};

export default Status;
