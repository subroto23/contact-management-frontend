"use client";
import { useGetAllContactsQuery } from "@/redux/api/contactApi";
import { TContactPayloadData } from "../Types";
import ContactsCard from "../ui/ContactsCard/ContactsCard";

const HomePageCard = () => {
  // const data = await fetch(process.env.NEXT_PUBLIC_BACKEND_API as string, {
  //   next: { revalidate: 10 },
  // });
  // const contacts = await data.json();
  const { data } = useGetAllContactsQuery({});

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data?.success &&
          data?.data?.map((el: TContactPayloadData) => (
            <ContactsCard key={el?._id} contact={el} buttonShow={false} />
          ))}
      </div>
    </div>
  );
};

export default HomePageCard;
