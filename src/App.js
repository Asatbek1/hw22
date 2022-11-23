import { useDispatch, useSelector } from "react-redux";
import AddTodo from "./components/AddItem";
import getFetchResponse from "./redux/store/reducers/asyncActions/getFetchResponse";

const App = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);
  console.log(users);
  const AddItem = () => {
    dispatch(getFetchResponse()).then((response) => {});
  };

  return (
    <div>
      <button disabled={users.length > 0} onClick={AddItem}>
        GET
      </button>
      <AddTodo />
    </div>
  );
};

export default App;
