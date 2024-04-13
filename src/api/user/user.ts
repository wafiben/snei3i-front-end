import { BASE_DEV_URL } from "../../config/url";
import { UserDto } from "../../types/userDto";
import { handleRequest } from "../http";

export const getUsers = async () =>
  await handleRequest<any>(`${BASE_DEV_URL}users`, "GET");

export const getSingleUser = async (id: string) =>
  await handleRequest<any>(`${BASE_DEV_URL}users/${id}`, "GET");

export const deleteSingleUser = async (id: string) =>
  await handleRequest<void>(`${BASE_DEV_URL}delete_user/${id}`, "DELETE");

export const addUser = async (data: UserDto) =>
  await handleRequest<void>(`${BASE_DEV_URL}create_user`, "POST", data);

export const modifyUser = async (id: string, data: UserDto) =>
  await handleRequest<void>(`${BASE_DEV_URL}modify_user/${id}`, "PUT", data);


