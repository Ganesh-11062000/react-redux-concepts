# Complete Guide to Redux, React-Redux and Redux-Thunk

## 3 Core Concepts of REDUX
1) **Store** : holds the data of your application
2) **Action** : is what tells reducer to manipulate the store data, it carries an optional payload.
3) **Reducer** : is what manipulates that data when it recieves an action.

## 3 Principles of REDUX
1) **Single source of truth** : The global state of your application is stored in an object tree within a single store.
2) **State is read-only** : The only way to change the state is to emit an action, an object describing what happened.
3) **Changes are made with pure functions** : To specify how the state tree is transformed by actions, you write pure reducers.

## Let's get familiar with some terminologies !!!
**Action is an object with type property**

**Action Creators are functions which which return action objects**

**Reducer is a function which takes previous state and depending upon action.type it returns a next state**

**Pure functions return same result if same arguments are passed in and it is independent of external state ( like DB,API,global variables)**

## Now it's time to see how we will implement these concepts <img src="https://user-images.githubusercontent.com/44189570/112339618-d4c4d180-8ce5-11eb-9a3e-980f55527f35.png" width="20" height="20"> 

```
const BUY_CAKE = 'BUY_CAKE';
```

``` 
function buyCake(numCakes){
  return {
    type: BUY_CAKE,
    payload: numCakes
  }
}
```

```
const initialState = {
  numOfCakes: 10
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case BUY_CAKE: return {
      ...state,
      numOfCakes = state.numOfCakes - action.payload,
    }
    default: return state
  }
}
```

                                                                
                                                 

