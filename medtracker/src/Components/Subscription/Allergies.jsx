import { useState } from "react";
import { FaAllergies } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import {
  AiOutlineDown,
  AiOutlineUp,
  AiOutlineTranslation,
} from "react-icons/ai";

import { IoAddSharp } from "react-icons/io5";
import { HiShare } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { useEffect } from "react";
import { allergies, deleteAllergy } from "../../features/actions/actions";


export const Allergies = ({ setAlergy }) => {
  const user  = useSelector(state => state.userReducer.user)
  const aleergy = useSelector((state) => state.allergyReducer.allergies);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allergies({id:user._id}));
  },[]);

  const deleteAllerg = (id) => {
    console.log(id)
    dispatch(deleteAllergy(id))
  }
  return (
    <div data-testid="allergy" className={`bg-white p-[10px] rounded-[20px] cursor-pointer`}>
      <div
        className="flex p-[10px] justify-between"
        onClick={() => setShow(!show)}
      >
        <div className="flex items-center cursor-pointer">
          <div className="mr-[3rem]">
            <FaAllergies size={40} className="text-black/30" />
          </div>
          <div>
            <h1 className="text-xl">Allergies</h1>
            <p className="font-thin ">{aleergy && aleergy.length} allergies</p>
          </div>
        </div>
        <div className="flex items-center">
          {show ? (
            <AiOutlineUp size={20} className="text-black/30" />
          ) : (
            <AiOutlineDown size={20} className="text-black/30" />
          )}
        </div>
      </div>

      <div
        className={`mt-[10px] ${
          show ? "h-[100%] transition-transform" : "hidden transition-transform"
        }`}
      >
        <hr className="w-[95%] text-center m-auto" />
  
        {aleergy && aleergy.map((alergy) => (
          <div className="flex justify-between items-center mx-[1rem] hover:bg-black/10 rounded-md cursor-pointer px-2" key={alergy._id}>
            <p className="my-2 px-[1rem] text-black/50">
              {alergy.name}
            </p>
            <MdDelete size={20} className="hover:text-red-600" onClick={() => deleteAllerg(alergy._id)}/>
          </div>
        ))}
      </div>
      <div className={`flex mt-2 ml-4 ${!show && "hidden"}`}>
        <button
          className="ml-4 border p-[10px] rounded-[20px] flex items-center"
          onClick={() => setAlergy(true)}
        >
          <IoAddSharp className="mr-2" /> Add
        </button>
        <button className="ml-4 border p-[10px] rounded-[20px] flex items-center">
          <AiOutlineTranslation className="mr-3" /> Translation
        </button>
        <button className="ml-4 border p-[10px] rounded-[20px] flex items-center">
          {" "}
          <HiShare className="mr-3" /> share
        </button>
      </div>
    </div>
  );
};
