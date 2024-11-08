"use client";

import { FavouriteArryContext } from "@/components/Pages/AllContacts";
import { useGetAllContactsReactionQuery } from "@/redux/api/contactReactionApi";
import { useContext } from "react";

const ContactFavouriteSorting = () => {
  const { data: reactionData, isLoading } = useGetAllContactsReactionQuery({});
  const { contactsArrays, setContactsArrys } =
    useContext<any>(FavouriteArryContext);
  if (isLoading || !contactsArrays || !reactionData) {
    return;
  }

  const handleFavouriteContact = () => {
    const FavouriteArrays = contactsArrays.filter((obj1: any) =>
      reactionData?.data?.some(
        (obj2: any) => obj1._id === obj2.id && obj2.loved
      )
    );
    setContactsArrys(FavouriteArrays);
  };
  return (
    <div
      onClick={handleFavouriteContact}
      className="transition duration-500 cursor-pointer flex gap-2"
    >
      <svg
        fill="#ffd70f"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 356.98 356.98"
        stroke=""
        className="size-4 cursor-pointer"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M340.188,56.127c-15.288-20.089-39.344-31.63-73.577-35.302c-2.773-0.282-5.698-0.453-8.707-0.453 c-30.354,0-60.594,14.24-79.413,36.863c-18.834-22.623-49.062-36.863-79.401-36.863c-3.005,0-5.915,0.171-8.743,0.453 c-34.182,3.672-58.231,15.219-73.528,35.296C1.65,76.024-3.295,103.007,2.133,136.315 c7.926,48.323,70.505,107.171,120.778,154.464l1.149,1.081c14,13.192,26.097,24.571,33.973,33.051 c1.065,1.188,10.664,11.697,21.173,11.697c10.574,0,19.96-10.665,20.812-11.686c8.37-9.079,21.96-21.947,35.38-34.636 c49.714-47.161,111.581-105.853,119.43-153.99C360.28,103.013,355.368,76.042,340.188,56.127z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
      Favourite
    </div>
  );
};

export default ContactFavouriteSorting;
