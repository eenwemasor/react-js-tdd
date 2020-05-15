import moxios from "moxios";
import { testStore } from "./../Utils";
import { fetchPosts } from "./../actions";

describe("fetchPosts actions", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("should update correctly", () => {
    const expectedState = [
      {
        title: "Example title 1",
        body: "Some text",
      },
      {
        title: "Example title 2",
        body: "Some text",
      },
      {
        title: "Example title 3",
        body: "Some text",
      },
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
