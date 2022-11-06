export type TUser = {
  name: string;
  email: string;
  password?: string;
};
export type TAuthenticationResponse = {
  success: boolean;
  message: string;
};

export type TUserResponse = {
  success: boolean;
  user: TUser;
  accessToken: string;
  refreshToken: string;
};

export type TResetTokenResponse = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
};

//TODO
export type TRequestErrorExeption = {
  success: boolean;
  message: string;
  error: string;
};

export type TOrder = {
  name: string;
  order: {
    number: number;
  };
  success: boolean;
};
export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  uuid: string;
};
