import React from "react";

const Notecard = ({ data }) => {



    return (
        <div className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between h-[210px]">

            {/* subtle hover glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50"></div>


            <div className="relative z-10">

                {/* title */}
                <h2 className="text-lg font-semibold text-gray-800 mb-2 tracking-wide">

                    {
                        data.title
                    }
                </h2>

                {/* description */}
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">

                    {data.desc}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">

                    {data.tag}
                </p>

            </div>

            {/* footer */}
            <div className="relative z-10 flex items-center justify-between mt-5">

                {/* date */}
                <span className="text-xs text-gray-400">
                    {/* {note.date} */}
                    Mar 11
                </span>

                {/* actions */}
                <div className="flex gap-2">

                    <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-blue-50 text-blue-600 hover:bg-blue-500 hover:text-white transition">
                        Edit
                    </button>

                    <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-red-50 text-red-600 hover:bg-red-500 hover:text-white transition">
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Notecard;