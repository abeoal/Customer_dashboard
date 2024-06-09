import { AiTwotoneFileText } from "react-icons/ai";



const PrimaryMenu = () => {
  return (
    <div className="flex w-full bg-bl">
      <div className="flex w-[95%] items-start gap-[50px] md:w-full md:flex-col md:p-5">
        
          <div className="w-80px flex flex-col h-screentop-0 bg-indigo-600 !sticky overflow-auto">
            <button className="p-20 flex-col text-white text-3xl font-normal">
              <img src="/pictures/images.jpg" alt="" className="h-[26px] w-[26px]"/>
              <button >my claim</button>
            </button>
            <div className="p-20 flex-col text-white text-3xl font-normal">
            <img src="/pictures/images.jpg" alt=""className="h-[26px] w-[26px]" />
              <button >notification</button>
            </div>
            <div className="p-20 flex-col text-white text-3xl font-normal">
            <img src="/pictures/images.jpg" alt="" className="h-[26px] w-[26px]"/>
              <button >help</button>
            </div>
          </div>
        

        


      </div>
    </div>
  );
};

export default PrimaryMenu;
