import React, { useState } from "react";
import { UpdateUserInfoForm } from "./UpdateUserInfoForm";
import { getInfoByEmail } from "./utils";

export const UserPage = () => {
  const [option, setOption] = useState("");
  const [user, setUser] = useState({});

  const showEditMyDataPanel = async () => {
    setUser((await getInfoByEmail(userdata.email))[0]);

    setOption("changeMyInfo");
  };

  console.log(user);

  let actions;
  let showEditMyDataClasses;
  if (option === "changeMyInfo") {
    showEditMyDataClasses = "active-btn";
    actions = <UpdateUserInfoForm user={user} />;
  } else {
    showEditMyDataClasses = "btn";

    actions = (
      <div className="place-self-center text-3xl text-gray-400">
        Velg et alternativ til venstre
      </div>
    );
  }

  return (
    <div className="mx-8 flex h-full bg-slate-300 p-5">
      <div className="w-36">
        <button
          className={showEditMyDataClasses}
          type="button"
          onClick={showEditMyDataPanel}
        >
          Endre på min data
        </button>
      </div>

      <div className="ml-6 grid w-full rounded-md border-2 border-slate-500 bg-gray-300 p-4 ">
        {actions}
      </div>
    </div>
  );
};
