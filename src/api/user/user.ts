import { BASE_DEV_URL } from "../../config/url";
import { User } from "../../types/user";
import { handleRequest } from "../http";

export const getUsers = async () =>
  await handleRequest<User[]>("https://jsonplaceholder.typicode.com/users" , "GET");

export const getSingleUser = async (id: string) =>
  await handleRequest<User[]>(`${BASE_DEV_URL}/users/${id}`, "GET");
  /* `${BASE_DEV_URL}/users` */
/*   export const addUser = async () =>
  await handleRequest<User[]>(`${BASE_DEV_URL}/users/${id}`, "POST");
 */

// export const getSingleEmployeeApi = async (id: string) =>
//   await handleRequest<Employee>(`${BASE_DEV_URL}/employees/${id}`, "GET");

// export const getProjectsApi = async () =>
//   await handleRequest<Project[]>(`${BASE_DEV_URL}/projects`, "GET");
