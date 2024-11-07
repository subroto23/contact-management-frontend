"use client";
import { useGetAllContactsQuery } from "@/redux/api/contactApi";
import { TContactPayloadData } from "../Types";
import ContactsCard from "../ui/ContactsCard/ContactsCard";

const AllContacts = () => {
  const { data, isLoading } = useGetAllContactsQuery({});
  return (
    <div className="min-h-screen bg-bodyColor p-4 my-6">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />{" "}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data?.success &&
              data?.data?.map((el: TContactPayloadData) => (
                <ContactsCard key={el?._id} contact={el} buttonShow={true} />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllContacts;
