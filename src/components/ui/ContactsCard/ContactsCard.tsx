"use client";
import { TContactPayloadData } from "@/components/Types";
import ContactCardEditButton from "./ContactCardEditButton";
import ContactCardDeleteButton from "./ContactCardDeleteButton";
import { useState } from "react";
import {
  useCreateContactReactionMutation,
  useGetAllContactsReactionQuery,
} from "@/redux/api/contactReactionApi";
import ContactFavouriteSorting from "./FavouriteSortingData";

const ContactsCard = ({
  contact,
  buttonShow = false,
}: {
  contact: TContactPayloadData;
  buttonShow: boolean;
}) => {
  const [createReaction] = useCreateContactReactionMutation();
  const { data, isLoading } = useGetAllContactsReactionQuery({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (isLoading) {
    return;
  }
  //Handle Menu Option
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //Handle Loved Chaking
  const handleLovedClickd = async (id: string) => {
    const data = {
      id,
      loved: true,
    };
    await createReaction(data).unwrap();
  };

  //Checking Existing Reactions
  const isLoved = data?.data?.find(
    (el: any) => el.id === contact?._id && el.loved
  );
  return (
    <>
      <div className="profile-card pt-12 pb-8 shadow-xl overflow-hidden z-[100] relative cursor-default snap-start shrink-0 flex flex-col items-center justify-center gap-3 transition-all duration-300 group bg-primaryColor after:absolute after:inset-1 after:bg-bodyColor rounded-3xl after:rounded-3xl after:-z-50">
        <div className="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
          <div
            className="size-32 z-40 border-4 border-white rounded-[30px_30px_40px_30px] group-hover:border-8 group-hover:transition-all group-hover:duration-300 transition-all duration-300 bg-cover origin-center"
            style={{ backgroundImage: `url(${contact.profile_picture})` }}
          >
            <div className="absolute right-5 -top-5">
              <div>
                <svg
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fffff"
                  className="size-7"
                  stroke="#ffff"
                  onClick={handleMenuOpen}
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>{" "}
                  </g>
                </svg>
              </div>
              {isMenuOpen ? (
                <div className="absolute right-0">
                  <ul className="menu bg-bodyColor border-4 border-secondaryColor rounded-box w-40">
                    <li>
                      <span>
                        <ContactCardEditButton id={contact?._id} />
                      </span>
                    </li>
                    <li>
                      <span>
                        <ContactCardDeleteButton id={contact?._id} />
                      </span>
                    </li>
                    <li>
                      <span>
                        <ContactFavouriteSorting id={contact?._id} />
                      </span>
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
            <div className="absolute left-5 -top-5">
              {isLoved ? (
                <>
                  <svg
                    fill="#ffd70f"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 356.98 356.98"
                    stroke=""
                    className="size-6 cursor-pointer"
                    onClick={() => handleLovedClickd(contact?._id)}
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
                </>
              ) : (
                <>
                  <svg
                    onClick={() => handleLovedClickd(contact?._id)}
                    fill="#ffffff"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                    className="size-6 cursor-pointer "
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
                </>
              )}
            </div>
          </div>
        </div>
        <div className="headings *:text-center *:leading-4 my-3">
          <p className="text-xl font-serif font-semibold">
            {`${contact?.name?.firstName} ${contact?.name?.middleName} ${contact?.name?.lastName}`}
          </p>
        </div>
        <div className="w-full items-center justify-center flex">
          <ul className="flex flex-col items-start gap-2 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-base *:font-semibold *:text-white pb-3">
            <li>
              <svg
                id="phone"
                viewBox="0 0 24 24"
                className="fill-white group-hover:fill-[#58b0e0]"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0V0z" fill="none"></path>
                <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path>
              </svg>
              <p>{contact?.phone}</p>
            </li>
            <li>
              <svg
                className="fill-white group-hover:fill-[#58b0e0]"
                height="15"
                width="15"
                id="mail"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z"
                  fill="#FFFFF"
                ></path>
              </svg>
              <p>{contact?.email}</p>
            </li>
            <li>
              <svg
                id="map"
                viewBox="0 0 16 16"
                className="fill-white group-hover:fill-[#58b0e0]"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
                  fill="#FFFFF"
                ></path>
              </svg>
              <p>{`${contact?.address?.city}, ${contact?.address?.country}`}</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContactsCard;
