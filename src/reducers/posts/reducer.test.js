import { types } from "./../../actions/types";
import myPost from './reducer'

describe('Post Reducer',()=>{
    it('should return default state', () => {
        const newState = myPost(undefined, {});
        expect(newState).toEqual([]);
    });
    

    it('should return new state if receiving type', () => {
        const posts = [
          {
            title: "Test 1",
          },
          {
            title: "Test 2",
          },
          {
            title: "Test 3",
          },
        ];

        const newState = myPost(undefined, {
          type: types.GET_POSTS,
          payload: posts,
        });

        expect(newState).toEqual(posts)
    });
})
