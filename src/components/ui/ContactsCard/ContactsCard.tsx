"use client";
import { TContactPayloadData } from "@/components/Types";
import ContactCardEditButton from "./ContactCardEditButton";
import ContactCardDeleteButton from "./ContactCardDeleteButton";
import { useState } from "react";

const ContactsCard = ({
  contact,
  buttonShow = false,
}: {
  contact: TContactPayloadData;
  buttonShow: boolean;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="profile-card pt-12 pb-8 shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 flex flex-col items-center justify-center gap-3 transition-all duration-300 group bg-primaryColor after:absolute after:inset-1 after:bg-bodyColor rounded-3xl after:rounded-3xl after:-z-50">
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
                  <ul className="menu bg-gray-700 rounded-box w-28">
                    <li>
                      <a>
                        <ContactCardEditButton id={contact?._id} />
                      </a>
                    </li>
                    <li>
                      <a>
                        <ContactCardDeleteButton id={contact?._id} />
                      </a>
                    </li>
                  </ul>
                </div>
              ) : null}
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
