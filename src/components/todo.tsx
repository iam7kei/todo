export const Todo = ({ todo, isChecked }: any) => {
  return (
    <div className="border-white border-2 max-w-[700px] max-h-[90px] w-full h-20 rounded-md bg-white">
      <div className="bg-white flex flex-row justify-between w-full h-full items-center space-x-5 p-5 border-b border-black rounded-md">
        <div className="h-full flex items-center max-w-3/4 w-auto ">
          <p className="text-md text-wrap text-black h-20 items-center justify-center flex overflow-auto max-w-3/4 w-auto ">
            {todo}
          </p>
        </div>
        <div className="flex justify-center items-center w-10 border border-white h-full">
          <button type="button">X</button>
        </div>
      </div>
    </div>
  );
};
