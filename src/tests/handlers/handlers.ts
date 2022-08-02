import { rest } from "msw";
import { dataAuth } from "../mocks/authData.mock";
import { task } from "../mocks/tasks.mocks";

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

const handlers = [
  rest.get(`${API_ENDPOINT}task`, (req, res, ctx) => {
    return res(ctx.json(task));
  }),
  rest.post(`${API_ENDPOINT}task`, async (req, res, ctx) => {
    const { title, status, importance, description } = await req.json();

    return res(
      ctx.json({
        success: true,
        result: {
          task: {
            _id: "62dda343wewa",
            createdAt: 164351523,
            deleted: false,
            deletedAt: "",
            description: description,
            importance: importance,
            modifiedAt: 1658935652118,
            status: status,
            teamId: "69a70ba0-779e-438e-9efc-a87964a48b42",
            title: title,
          },
        },
      })
    );
  }),

  rest.get(`${API_ENDPOINT}auth/data`, (req, res, ctx) => {
    const result = res(ctx.json(dataAuth));
    return result;
  }),

  rest.post(`${API_ENDPOINT}auth/login`, async (req, res, ctx) => {
    const { userName, password } = await req.json();

    return res(
      ctx.json({
        success: true,
        result: { token: "sfs646dsd3546s56iohsd", user: { userName: "user" } },
      })
    );
  }),

  rest.post(`${API_ENDPOINT}auth/register`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        success: true,
        result: {
          acknowledged: true,
          insertedId: "62e734a5a8266244fadf03ec",
          user: {
            continent: "Europa",
            email: "user@mail.com",
            region: "Otro",
            role: "Team Member",
            teamID: "125b2cfa-e7b4-4711-acd6-bde3ca9ea3cd",
            userName: "user",
            _id: "62e734a5a8266244fadf03ec",
          },
        },
      })
    );
  }),
];

export default handlers;
