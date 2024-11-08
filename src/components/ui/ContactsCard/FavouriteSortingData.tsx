"use client";

import { FavouriteArryContext } from "@/components/Pages/AllContacts";
import {
  useCreateContactReactionMutation,
  useGetAllContactsReactionQuery,
  useUpdateContactReactionMutation,
} from "@/redux/api/contactReactionApi";
import { useContext, useEffect, useState } from "react";

const ContactFavouriteSorting = ({ id }: { id: string }) => {
  const { data: reactionData, isLoading } = useGetAllContactsReactionQuery({});
  const [updateReactions] = useUpdateContactReactionMutation();
  const [createReaction] = useCreateContactReactionMutation();
  const [isLoved, setIsLoved] = useState(false);

  useEffect(() => {
    if (reactionData) {
      const selectedReaction = reactionData.data.find(
        (el: any) => el.id === id && el?.loved
      );
      if (selectedReaction) {
        setIsLoved(selectedReaction.loved);
      }
    }
  }, [reactionData, id]);

  // const { contactsArrays, setContactsArrys } =
  //   useContext<any>(FavouriteArryContext);

  // if (isLoading || !contactsArrays || !reactionData) {
  //   return;
  // }

  // const handleFavouriteContact = () => {
  //   const FavouriteArrays = contactsArrays.filter((obj1: any) =>
  //     reactionData?.data?.some(
  //       (obj2: any) => obj1._id === obj2.id && obj2.loved
  //     )
  //   );
  //   setContactsArrys(FavouriteArrays);
  // };

  //Handle Loved Chaking
  const handleLovedClickd = async (id: string) => {
    const selectedReactionElemtnt = reactionData?.data?.filter(
      (el: any) => el.id === id && el?.loved
    );

    if (selectedReactionElemtnt?.length === 0) {
      const data = {
        id,
        loved: true,
      };
      await createReaction(data).unwrap();
    } else {
      const data = {
        id: selectedReactionElemtnt[0]?._id,
        loved: false,
      };
      await updateReactions(data).unwrap();
    }
  };

  return (
    <>
      {isLoved ? (
        <>
          <div
            onClick={() => handleLovedClickd(id)}
            className="transition duration-500 cursor-pointer flex gap-2"
          >
            <svg
              fill="#ffffff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
              className="size-4 cursor-pointer"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M20.5,4.609A5.811,5.811,0,0,0,16,2.5a5.75,5.75,0,0,0-4,1.455A5.75,5.75,0,0,0,8,2.5,5.811,5.811,0,0,0,3.5,4.609c-.953,1.156-1.95,3.249-1.289,6.66,1.055,5.447,8.966,9.917,9.3,10.1a1,1,0,0,0,.974,0c.336-.187,8.247-4.657,9.3-10.1C22.45,7.858,21.453,5.765,20.5,4.609Zm-.674,6.28C19.08,14.74,13.658,18.322,12,19.34c-2.336-1.41-7.142-4.95-7.821-8.451-.513-2.646.189-4.183.869-5.007A3.819,3.819,0,0,1,8,4.5a3.493,3.493,0,0,1,3.115,1.469,1.005,1.005,0,0,0,1.76.011A3.489,3.489,0,0,1,16,4.5a3.819,3.819,0,0,1,2.959,1.382C19.637,6.706,20.339,8.243,19.826,10.889Z"></path>
              </g>
            </svg>
            Un-Favorite
          </div>
        </>
      ) : (
        <>
          <div
            onClick={() => handleLovedClickd(id)}
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
            Favorite
          </div>
        </>
      )}
    </>
  );
};

export default ContactFavouriteSorting;
