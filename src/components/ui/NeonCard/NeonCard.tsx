"use client";
import { useGetAllContactsQuery } from "@/redux/api/contactApi";
import NeonCardBody from "./NeonCardBody/NeonCardBody";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { neonCardAnimateParient } from "@/animate/neonCard.animate";

const NeonCard = () => {
  const { data: contact, isLoading } = useGetAllContactsQuery({});
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      variants={neonCardAnimateParient}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="p-5 mx-3 my-4 overflow-hidden"
    >
      {!isLoading && contact?.data?.length >= 0 && (
        <h1 className="text-secondaryColor text-2xl mb-3 ml-4 font-extrabold">
          Contacts
        </h1>
      )}

      <div className="grid grid-cols-1 md-range:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-x-10 lg:grap-y-24">
        {!isLoading &&
          contact?.data?.length >= 0 &&
          contact?.data?.map((el: any, id: number) => {
            return <NeonCardBody key={el._id} contact={el} idx={id} />;
          })}
      </div>
    </motion.div>
  );
};

export default NeonCard;
