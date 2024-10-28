export type TContactPayloadData = {
  _id: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  email: string;
  phone: string;
  address: {
    city: string;
    country: string;
  };
  profile_picture: string;
};
