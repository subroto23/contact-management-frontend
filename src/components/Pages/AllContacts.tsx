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
          <div className="max-w-3xl mx-auto text-center mt-1 mb-12">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                Contacts List
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
            </h1>
            <p className="text-lg mb-8">
              Get in touch with us for support, inquiries, or to explore
              opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md-range:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
