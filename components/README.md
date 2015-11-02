# Components

Basically, this folder keeps all your UI pieces (like your bricks), which later be combined 
at `containers/app.js` (a building).

---

## Components in React context

In a nutshell, it is just `<HTML>`, and any '<HTML>` element would have:

1. Attribute-tag. Anything that makes up a visual display.
    - color
    - text
    - width/height
    - selected
    - checked
    - top-position/left-position
    - ...etc (other css-styles)


2. Event-handler-tag:
    - onClick
    - onChange
    - onFocus

--- 

## Components in Redux context

 `Containers/app.js` supplies values & callbacks to Components. That's all.
