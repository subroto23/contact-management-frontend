import { TContactPayloadData } from "@/components/Types";
import Image from "next/image";
import ContactCardEditButton from "./ContactCardEditButton";
import ContactCardDeleteButton from "./ContactCardDeleteButton";

const ContactsCard = ({
  contact,
  buttonShow = false,
}: {
  contact: TContactPayloadData;
  buttonShow: boolean;
}) => {
  return (
    <div className="mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
      <Image
        className="rounded-xl object-cover origin-center w-[400px] h-[200px]"
        src={contact.profile_picture}
        alt={contact.name.firstName}
        width={500}
        height={500}
      />
      <div className="flex justify-between items-center">
        <div>
          <h1 className="mt-5 text-2xl font-semibold">
            {contact.name.firstName} {contact.name.middleName}{" "}
            {contact.name.lastName}
          </h1>
          <p className="">
            {contact.address.city}, {contact.address.country}
          </p>
        </div>
        {buttonShow && (
          <div className="flex-end flex gap-2">
            {/* Edit Icon */}
            <ContactCardEditButton id={contact?._id} />
            {/* Delete Icon */}
            <ContactCardDeleteButton id={contact?._id} />
          </div>
        )}
      </div>

      <div>
        <div className="border-b mt-3">
          <div className="py-2 flex items-center">
            <div className="text-gray-800">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                    fill="#A78BFA"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {contact.phone}
              </p>
            </div>
          </div>
        </div>
        <div className="border-b">
          <div className="py-2 flex items-center">
            <div className="text-gray-800">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                    fill="#A78BFA"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {contact.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsCard;
