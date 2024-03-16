import { TbTrashX, TbPencilPlus } from "react-icons/tb";

export default function List({ itemList, editItem, removeItem }) {
  return (
    <section className="list-wrapper">
      {itemList.map((item) => {
        const { id, title } = item;
        return (
          <div key={id} className="list-ctr">
            <p>{title}</p>
            <div>
              <button
                onClick={() => {
                  editItem(id);
                }}
              >
                <TbPencilPlus />
              </button>
              <button
                onClick={() => {
                  removeItem(id);
                }}
              >
                <TbTrashX />
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}
