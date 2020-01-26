import React from "react";
import { types } from "./actionTypes";

export const initialState = {
  questions: [
    {
      content: "What is this sign called",
      id: 1,
      choices: [
        {
          content: "one1 crossing",
          img: "zebra.png",
          id: 1
        },
        {
          content: "one2 crossing",
          img: "zebra.png",
          id: 2
        },
        {
          content: "one3 crossing",
          img: "zebra.png",
          id: 3
        }
      ]
    },
    {
      content: "Road signs are dope!",
      id: 2,
      choices: [
        {
          content: "two1 crossing",
          img: "zebra.png",
          id: 1
        },
        {
          content: "two2 crossing",
          img: "zebra.png",
          id: 2
        },
        {
          content: "two3 crossing",
          img: "zebra.png",
          id: 3
        }
      ]
    },
    {
      content: "What is this sign called",
      id: 3,
      choices: [
        {
          content: "three1 crossing",
          img: "zebra.png",
          id: 1
        },
        {
          content: "three2 crossing",
          img: "zebra.png",
          id: 2
        },
        {
          content: "three4 crossing",
          img: "zebra.png",
          id: 3
        }
      ]
    }
  ],
  answers: []
};

export function reducer(state, action) {
  switch (action.type) {
    case types.SET_QUESTION:
      return Object.assign({}, state, {
        question: { ...(action.payload || {}) }
      });

    case types.SET_ANSWERS:
      return Object.assign({}, state, {
        answers: [...state.answers, action.payload || {}]
      });

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const StoreContext = React.createContext();

export const DispatchContext = React.createContext();
