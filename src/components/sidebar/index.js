import useUser from "../../hooks/use-user";
import User from "./user";
import Suggestions from "./suggestions";

export default function Sidebar(){
  const {
    user
  } = useUser();

//cannot read the value!!!
  return (
    <div className="p-4">
      <User username={user['username']} fullname={user['fullname']}/>
      <Suggestions userId={user['userId']}/>
    </div>
  );
}
