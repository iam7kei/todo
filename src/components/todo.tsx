export const Todo = ({ todo, isChecked, setIsChecked, index }: any) => {
  return (
    <div className="border-white border-2 max-h-[90px] w-full h-20 rounded-md bg-white">
      <div className="bg-white flex flex-row justify-between w-full h-full items-center p-5 border-b border-black rounded-md">
        <div className="h-full flex items-center w-[90%] text-ellipsis overflow-hidden">
          <p
            className={`text-md text-wrap text-black h-20 items-center justify-center flex w-full text-ellipsis overflow-hidden ${isChecked && 'line-through'}`}
          >
            {todo}
          </p>
        </div>
        <div className="flex justify-center items-center w-[10%] border border-white h-full">
          <button type="button" onClick={() => {
            setIsChecked(index)
          }}>X</button>
        </div>
      </div>
    </div>
  );
};
