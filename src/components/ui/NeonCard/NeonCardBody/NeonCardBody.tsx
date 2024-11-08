import { neonCardAnimateChild } from "@/animate/neonCard.animate";
import { TContactPayloadData } from "@/components/Types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Modals from "../../Modals/Modals";
import ProfileModels from "../../ProfileModels/ProfileModels";

type TContactPayload = {
  contact: TContactPayloadData;
  idx: number;
};

const NeonCardBody = ({ contact, idx }: TContactPayload) => {
  const isClicked = false;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  //Modals Information
  const [editedId, setEditedId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  //Models Close
  const onClose = () => {
    setIsOpen((prev) => !prev);
  };

  //Hande Model Open And close
  const handleClickedButtonId = (id: string) => {
    setEditedId(id);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {idx % 2 === 0 ? (
        <>
          <motion.div
            ref={ref}
            style={{ opacity }}
            variants={neonCardAnimateChild}
            className="h-[300px] w-full bg-gradient-to-b from-primaryColor via-secondaryColor to-secondaryColor relative rounded-3xl after:absolute after:inset-1 after:bg-bodyColor after:rounded-3xl  hover:bg-gradient-to-l hover:from-primaryColor hover:via-secondaryColor hover:to-primaryColor cursor-pointer transition-all ease-linear duration-500 group"
            onClick={() => handleClickedButtonId(contact?._id)}
          >
            {/* Love Button */}
            {/* <div className="z-10 absolute top-6 right-3">
              <div>
                {isClicked ? (
                  <>
                    <svg
                      fill="#0FFBF9"
                      height="30px"
                      width="40px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 503.876 503.876"
                      className=" cursor-none"
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
                            <path d="M469.361,71.689c-32.071-35.681-70.026-54.532-109.761-54.532c-44.309,0-84.27,27.01-107.654,71.638 c-23.334-44.628-62.993-71.638-106.857-71.638c-39.743,0-76.649,18.331-109.719,54.482 C-3.392,114.042-25.273,210.34,50.889,282.356c35.143,33.221,193.779,200.074,195.374,201.753c1.586,1.662,3.785,2.61,6.077,2.61 h0.008c2.291,0,4.482-0.94,6.068-2.594c1.603-1.679,160.667-168.163,195.458-201.837 C528.576,209.962,507.274,113.866,469.361,71.689z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </>
                ) : (
                  <>
                    {" "}
                    <svg
                      fill="#0FFBF9"
                      height="30px"
                      width="40px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.289 512.289"
                      stroke="#0FFBF9"
                      className=" cursor-pointer"
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
                            <path d="M477.051,72.678c-32.427-36.693-71.68-55.467-111.787-55.467c-45.227,0-85.333,27.307-109.227,72.533 c-23.04-45.227-64-72.533-108.373-72.533c-40.96,0-78.507,18.773-111.787,55.467c-39.253,43.52-61.44,141.653,15.36,215.04 c35.84,33.28,197.12,203.093,198.827,204.8s3.413,2.56,5.973,2.56s5.12-0.853,6.827-3.413 c1.707-1.707,163.84-170.667,198.827-204.8C537.637,213.478,515.451,115.344,477.051,72.678z M448.891,275.771 c-31.573,29.867-162.987,167.253-192.853,198.827c-29.867-32.427-160.427-168.96-192.853-199.68 c-69.12-65.707-49.493-151.893-14.507-190.293c29.867-32.427,64-49.493,98.987-49.493c42.667,0,81.067,29.867,100.693,79.36 c0.853,2.56,4.267,5.12,7.68,5.12s6.827-2.56,7.68-5.12c19.627-48.64,58.027-79.36,101.547-79.36 c35.84,0,69.12,16.213,98.133,50.347C497.531,123.024,517.157,210.064,448.891,275.771z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </>
                )}
              </div>
            </div> */}
            {/* Image */}
            <div
              className={`h-32 w-32 bg-gradient-to-t from-primaryColor via-secondaryColor to-primaryColor relative rounded-full drop-shadow-[0px_0px_10px_rgba(220,33,255,0.4)] after:absolute after:inset-1 z-10 mx-auto top-10 group-hover:scale-[1.1] transition-all ease-linear duration-200`}
              style={{
                backgroundImage: `url(${contact?.profile_picture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            {/* Text Section */}
            <div className="z-10 absolute inset-0 bottom-6 flex justify-center items-end">
              <div className="text-center text-white ">
                <h1 className="text-2xl font-bold">{`${contact.name.firstName} ${contact.name.middleName}
            ${contact.name.lastName}`}</h1>
                <div className="w-full items-center justify-center flex mt-1 mb-3">
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
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            ref={ref}
            style={{ opacity }}
            variants={neonCardAnimateChild}
            className="h-[300px] w-full bg-gradient-to-b from-secondaryColor via-primaryColor to-primaryColor relative rounded-3xl after:absolute after:inset-1 after:bg-bodyColor after:rounded-3xl  hover:bg-gradient-to-l hover:from-primaryColor hover:via-secondaryColor hover:to-primaryColor cursor-pointer transition-all ease-linear duration-500 group"
            onClick={() => handleClickedButtonId(contact?._id)}
          >
            {/* Love Button */}
            {/* <div className="z-10 absolute top-6 right-3">
              <div>
                {isClicked ? (
                  <>
                    <svg
                      fill="#0FFBF9"
                      height="30px"
                      width="40px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 503.876 503.876"
                      className=" cursor-none"
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
                            <path d="M469.361,71.689c-32.071-35.681-70.026-54.532-109.761-54.532c-44.309,0-84.27,27.01-107.654,71.638 c-23.334-44.628-62.993-71.638-106.857-71.638c-39.743,0-76.649,18.331-109.719,54.482 C-3.392,114.042-25.273,210.34,50.889,282.356c35.143,33.221,193.779,200.074,195.374,201.753c1.586,1.662,3.785,2.61,6.077,2.61 h0.008c2.291,0,4.482-0.94,6.068-2.594c1.603-1.679,160.667-168.163,195.458-201.837 C528.576,209.962,507.274,113.866,469.361,71.689z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </>
                ) : (
                  <>
                    {" "}
                    <svg
                      fill="#0FFBF9"
                      height="30px"
                      width="40px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.289 512.289"
                      stroke="#0FFBF9"
                      className=" cursor-pointer"
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
                            <path d="M477.051,72.678c-32.427-36.693-71.68-55.467-111.787-55.467c-45.227,0-85.333,27.307-109.227,72.533 c-23.04-45.227-64-72.533-108.373-72.533c-40.96,0-78.507,18.773-111.787,55.467c-39.253,43.52-61.44,141.653,15.36,215.04 c35.84,33.28,197.12,203.093,198.827,204.8s3.413,2.56,5.973,2.56s5.12-0.853,6.827-3.413 c1.707-1.707,163.84-170.667,198.827-204.8C537.637,213.478,515.451,115.344,477.051,72.678z M448.891,275.771 c-31.573,29.867-162.987,167.253-192.853,198.827c-29.867-32.427-160.427-168.96-192.853-199.68 c-69.12-65.707-49.493-151.893-14.507-190.293c29.867-32.427,64-49.493,98.987-49.493c42.667,0,81.067,29.867,100.693,79.36 c0.853,2.56,4.267,5.12,7.68,5.12s6.827-2.56,7.68-5.12c19.627-48.64,58.027-79.36,101.547-79.36 c35.84,0,69.12,16.213,98.133,50.347C497.531,123.024,517.157,210.064,448.891,275.771z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </>
                )}
              </div>
            </div> */}
            {/* Image */}
            <div
              className={`h-32 w-32 bg-gradient-to-t from-primaryColor via-secondaryColor to-primaryColor relative rounded-full drop-shadow-[0px_0px_10px_rgba(220,33,255,0.4)] after:absolute after:inset-1 z-10 mx-auto top-10 group-hover:scale-[1.1] transition-all ease-linear duration-200`}
              style={{
                backgroundImage: `url(${contact?.profile_picture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Text Section */}
            <div className="z-10 absolute inset-0 bottom-6 flex justify-center items-end">
              <div className="text-center text-white ">
                <h1 className="text-2xl font-bold">{`${contact.name.firstName} ${contact.name.middleName}
            ${contact.name.lastName}`}</h1>
                <div className="w-full items-center justify-center flex mt-1 mb-3">
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
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
      <Modals isOpen={isOpen} onClose={onClose}>
        <ProfileModels id={editedId && editedId} />
      </Modals>
    </>
  );
};

export default NeonCardBody;
