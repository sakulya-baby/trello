import { TodoForm } from "../components/list/TodoForm";
import { useSelector } from "react-redux";
import { Modal } from "../components/UI/Modal";

export const Main = () => {
  const { isOpenCart } = useSelector((store) => store.trello);
  return (
    <div>
      <TodoForm />

      {isOpenCart && <Modal />}
    </div>
  );
};
