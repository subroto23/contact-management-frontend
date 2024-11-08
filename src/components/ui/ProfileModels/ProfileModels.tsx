"use client";
import { useGetSingleContactQuery } from "@/redux/api/contactApi";
import Image from "next/image";

const ProfileModels = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetSingleContactQuery({
    id,
  });
  if (isLoading) {
    return;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 card-body justify-center items-center">
        <div>
          <figure>
            <Image
              src={data?.data?.profile_picture}
              className="object-cover object-center rounded"
              alt="hero"
              width={100}
              height={100}
              layout="responsive"
            />
          </figure>
        </div>
        <div>
          <h2 className="font-extrabold text-white uppercase mb-3 text-center">
            {`${data?.data?.name?.firstName} ${data?.data?.name?.middleName} ${data?.data?.name?.lastName}`}
          </h2>
          <div className="w-full items-center justify-center flex">
            <ul className="flex flex-col items-start gap-2 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-white pb-3">
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
                <p>{`${data?.data?.address?.city}, ${data?.data?.address?.country}`}</p>
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
                <p>{data?.data?.email}</p>
              </li>
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
                <p>{data?.data?.phone}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileModels;
