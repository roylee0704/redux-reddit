# Reducers

In a nutshell. Reducer is a just utility function that transforms an input (be it object /array/ primitive data) and 
returns an output of different form.

## 1.0  Reducer Notation

1. In Generic Context

```javascript
(accumulator, item) => accumulator
```

2. In  Redux Context

(previous-state, action) => new-state

or from low-level perspective,

```javascript
({}, action) => {}
```

**Note**: So, reducer? In my own word, it is known better as a State Transformer, or function that transforms state.



##  2.0 State (In Redux Context)

Let's talk about Reducer's sate. 

Well, `state` that you seen now has greatly simplified, thanks to `combineReducers()`. Originally, or technically,
that `state` passed in/out from `Reducer` should be known as a `state tree` (a bunch of states), than just one state.

### What is state tree?

Literally, it is a tree that hangs states, though the tree could have height n, but all of states will have depth of 1.

In javascript object literal form, it looks like this:

```javascript
state_tree = {
    state_1: {},
    state_2: '',
    state_3: 0,
    state_n: value
}
```

For example,

```javascript
state_tree['state_2'] = value

# also equals to...

state_tree['selectedReddit'] = 'reactjs'
```


**Note** : In my own word, state tree just a *hash_map* or *key_value_pairs*.


### What is state?

In my own word, `state` is just a variable that holds a value. As @redux_creator says, it's important to define your 
states/state-tree before anything else. Then the next question to ask, how do you define `state` in first place? 
How do you know what `state` to create? 

It's not as hard as you think, just look at the inputs of `containers/App`, what variable-value does it needs? 
That's the `state` you need.

*Tips*: `react` component is a function, `state` is its input parameter.


### What about action?

Well, metaphorically, action is more likely a token to `buy` or `change` new state? And Reducer is like a merchant shop 
where you trade new `state` for an `action.


## 3.0  Code Snippets

```javascript

/**
 * Named after variable.
 * This function handles the update of variable: selectedReddit
 * @param state
 * @param action
 * @returns {string}
 */
function selectedReddit(state = 'reactjs', action = {}) {
    switch (action.type) {
        case SELECT_REDDIT:
            return action.data;
        default:
            console.log(state);
            return state;
    }
}

```

**Note**: `event` === `action`


A reducer(small) is a function that named after the variable, and returns the value of that variable itself, depending 
on the action. 

This function will be called(blasted by `combineReducer` utility) every single time, whenever there is a `dispatch()`. 
Hence, as you may observe, within the `switch` statement, if you are interested with an `action`, you **subscribe** to it.

Another words, if you ever need to update a variable/'s value when an event/action occurs, do so by subscribing it.