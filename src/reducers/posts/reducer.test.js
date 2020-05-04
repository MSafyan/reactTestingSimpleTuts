import {types} from './../../actions/types';
// import postsReducer from './reducer'

const postsReducer=(state=[],action)=>{
  switch(action.types){
    case types.GET_POSTS:
      return action.payload
    default:
      return state;  
  }
}

describe('Posts Reducer',()=>{
  it("Should return default state",()=>{
    //undefined so state is passed natural,action is an abject so empty object
    const newState=postsReducer(undefined,{});
    expect(newState).toEqual([]);
  })
  it("SHould return new state if recieving type",()=>{
    const posts=[{title:'test 1'},{title:'test 1'},{title:'test 1'}]
    const newState=postsReducer(undefined,{
      types:types.GET_POSTS,
      payload:posts
    });
    expect(newState).toEqual(posts);
  })
})