#Actions

In plain, `Action` is nothing but an object `{}`.


## Actions in Redux context

Since its an `{}`, therefore it could have property:

- action_type: `String`.  *This is just nothing but an ENUM (developer communication) in Java/Ruby*
- data: `Object`. *Object type is good, because you can store more data.*


**Note**: Action `{}` is generated by function action_type(data)


## Actions as a BALL

Often time, it is easier to perceive `action` as a ball, as it is an object that is being thrown around.

The following diagram illustrates the flow:

Component -(`action`)-> Reducer -(`state`)-> Component