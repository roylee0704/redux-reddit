# Reducers

In a nutshell. Reducer is a just utility function that transforms an input (be it object /array/ primitive data) and 
returns an output of different form.

## 1.0 Reducer Notation

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


## 2.0 State (In Redux Context)

Let's talk about Reducer's sate. 

Well, `state` that you seen now has greatly simplified, thanks to `combineReducers()`. Originally, or technically,
that `state` passed in/out from `Reducer` should be known as a `state tree` (a bunch of states), that just one state.

### 2.1 What is state tree?

Literally, it means tree that hangs states, with tree-height of 1.

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

---

### 2.2 What is state?

In my own word, `state` is just a variable that holds a value.