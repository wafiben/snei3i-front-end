import { BASE_DEV_URL } from "../../config/url";
import { User } from "../../types/user";
import { handleRequest } from "../http";

export const getUsers = async () =>
  await handleRequest<any>(`${BASE_DEV_URL}users` , "GET");

export const getSingleUser = async (id: string) =>
  await handleRequest<any>(`${BASE_DEV_URL}users/${id}`, "GET");

  export const deleteSingleUser = async (id: string) =>
  await handleRequest<void>(`${BASE_DEV_URL}delete_user/${id}`, "DELETE");

  
  /* `${BASE_DEV_URL}/users` */
/*   export const addUser = async () =>
  await handleRequest<User[]>(`${BASE_DEV_URL}/users/${id}`, "POST");
 */

// export const getSingleEmployeeApi = async (id: string) =>
//   await handleRequest<Employee>(`${BASE_DEV_URL}/employees/${id}`, "GET");

// export const getProjectsApi = async () =>
//   await handleRequest<Project[]>(`${BASE_DEV_URL}/projects`, "GET");
