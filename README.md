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
**"Action" is an object with type property**

**"Action Creators" are functions which return action objects**

**"Reducer" is a function which takes previous state and depending upon action.type it returns a next state**

**"Pure" functions return same result if same arguments are passed in and it is independent of external state ( like DB,API,global variables)**

## Now it's time to see how we will implement these concepts <img src="https://user-images.githubusercontent.com/44189570/112339618-d4c4d180-8ce5-11eb-9a3e-980f55527f35.png" width="20" height="20"> 

```
// cakeTypes.js
const BUY_CAKE = 'BUY_CAKE';
```

``` 
// cakeActions.js
function buyCake(numCakes){
  return {
    type: BUY_CAKE,
    payload: numCakes
  }
}
```

```
// cakeReducers.js
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

This same Redux Pattern will be used everytime.   
i.e ActionType.js => Actions (= ActionCreators) => Reducer.js

## Wait! Where did we create the redux state Object ??
We have seperate store.js file for holding the redux store and middleware logic.

```
// store.js
const store = createStore(rootReducer,applyMiddleware(logger,thunk));
```
**REMEMBER** : <br/>
store takes only **one** reducer and can take any number of middlewares!

But our project can have many reducers, isn't it? 

Yes! we need to combine all those reducers together and provide a combined Reducer.

```
// rootReducer.js
const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    user:userReducer
});
```
**Note** :

Every Reducer has its own state.

So, the redux store will be a single object having all these objects as its key-value pair.

**`reduxStore Object = {cake: { numOfCakes:10},iceCream: {numOfIceCreams:20},user: {users:[]}}`**


## We are done with REDUX Part, but how will our React-app will be able to access this redux store?
With the help of **Provider** we can pass this redux state Object as props to our App component.

```
// app.js
import { Provider } from 'react-redux';
import store from './redux/store';

 <Provider store={store}>
      <div>         
          <CakeContainer/>
          <IceCreamContainer/>
          <UserContainer/>
      </div>
 </Provider>
```
## Now we are left with understanding how can we read and manipulate the redux state from our components
We can do this using two methods:
1) mapStateToProps and MapDispatchToProps 

mapStateToProps receives

```
const mapStateToProps = state => {
    return {
        numOfCakes:state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake:() => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CakeContainer);
```
2) useSelector and useDispatch ( using **React Hooks**)




                                                                
                                                 

