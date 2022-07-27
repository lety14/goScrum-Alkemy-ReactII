import {
  AnyAsyncThunk,
  FulfilledActionFromAsyncThunk,
} from "@reduxjs/toolkit/dist/matchers";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILoginUser } from "../../types/userLogin.type";
import { IRegistrationUser } from "../../types/userRegister.type";

// const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;
const API_ENDPOINT = "https://goscrum-api.alkemy.org/";
/**
 * TODO CAMBIAR API
 */

type LoginProps = {
  result: {
    token: string;
    user: {
      userName: string;
    };
  };
};
type PostResgisterProps = {
  values: IRegistrationUser;
  teamID: string;
};
type LocationProps = {
  result: { Rol: string[]; continente: string[]; region: string[] };
  message: string;
  status_code: number;
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_ENDPOINT}auth` }),
  tagTypes: ["user"],
  endpoints: (build) => ({
    // GET auth data request
    getAuthData: build.query<
      LocationProps,
      FulfilledActionFromAsyncThunk<AnyAsyncThunk>
    >({
      query: () => "/data",
      async onQueryStarted({ queryFulfilled }) {
        try {
          const { data } = await queryFulfilled.unwrap();
          return data;
        } catch (err) {}
      },
    }),
    // POST login request
    loginUser: build.mutation<LoginProps, ILoginUser>({
      query: ({ userName, password }) => ({
        url: "/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          userName,
          password,
        },
      }),
      invalidatesTags: ["user"],
    }),
    // POST Register request
    registerUser: build.mutation<void, PostResgisterProps>({
      query: ({ values, teamID }) => ({
        url: "/register",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          user: {
            userName: values.userName,
            password: values.password,
            email: values.email,
            teamID,
            role: values.role,
            continent: values.continent,
            region: values.region,
          },
        },
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetAuthDataQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
} = userApi;
