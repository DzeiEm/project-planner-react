import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  //NOTE: refs just reaading the input values
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function hadleSave() {
    const enteredTitile = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitile.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() == ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitile,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 mt-4 mb-4">
          Invalid input
        </h2>
        <p className="text-stone-600 mb-4">
          Oooops loooks like you forgot to enter value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
              onClick={hadleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due date" />
        </div>
      </div>
    </>
  );
}
