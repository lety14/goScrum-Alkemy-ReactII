import "whatwg-fetch";
import "@testing-library/jest-dom";

import { server } from "./src/tests/server/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
