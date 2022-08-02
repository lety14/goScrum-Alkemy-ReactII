import { ITask } from "../../types/tasks.type";
import axios, { AxiosResponse } from "axios";
const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

interface taskResponse {
  result: { task: ITask };
}

const access_token = localStorage.getItem("token");

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${access_token}`,
  },
};

const getTasks = async (byUser = "" as string) => {
  const response = await axios.get(`${API_ENDPOINT}task/${byUser}`, config);
  return response.data.result;
};

const postNewTask = async (task: ITask) => {
  const res = await axios
    .post(`${API_ENDPOINT}task`, { task: task }, config)
    .then(({ data }: AxiosResponse<taskResponse>) => {
      return data.result.task;
    });
  return res;
};

const updateTask = async (task: ITask) => {
  const statusArray = ["NEW", "IN PROGRESS", "FINISHED"];

  const newStatusIndex =
    statusArray.indexOf(task.status) > 1
      ? 0
      : statusArray.indexOf(task.status) + 1;

  const taskUpdated = {
    title: task.title,
    importance: task.importance,
    status: statusArray[newStatusIndex],
    description: task.description,
  };

  const response = await axios
    .patch(`${API_ENDPOINT}task/${task._id}`, { task: taskUpdated }, config)
    .then(({ data }: AxiosResponse<taskResponse>) => {
      return {
        _id: task._id,
        title: task.title,
        createdAt: task.createdAt,
        importance: task.importance,
        status: statusArray[newStatusIndex],
        description: task.description,
      };
    });
  return response;
};

const deleteTask = async (id: number) => {
  await axios.delete(`${API_ENDPOINT}task/${id}`, config);
  return id;
};

const TaskService = {
  getTasks,
  postNewTask,
  updateTask,
  deleteTask,
};
export default TaskService;
