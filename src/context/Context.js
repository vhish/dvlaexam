import React from "react";
import { types } from "../utils/actionTypes";

export const initialState = {
  theme: {
    auto: true,
    mode: "light"
  },
  session: null,
  goals: [],
  goal: {},
  goalTransactions: [],
  goalUsers: [],
  summary: {},
  balance: {
    balance: 0
  },
  payees: [],
  payeeAccounts: [],
  reference: {},
  paymentMethods: [],
  paymentMethod: {},
  activities: [],
  activity: {},
  transaction: {
    status: false
  },
  loading: {
    status: false,
    template: <div dangerouslySetInnerHTML={{ __html: window.LOADING }} />
  },
  authorize: {
    status: true,
    proceed: null
  },
  getVodaToken: {
    status: false
  },
  getCardCvv: {
    status: false
  },
  schedule: {
    status: false
  },
  schedules: [],
  rewards: {
    totalPoints: 0
  },
  buttonSubmitted: false
};

export function reducer(state, action) {
  switch (action.type) {
    case types.SET_THEME:
      return Object.assign({}, state, {
        theme: { ...(action.payload || {}) }
      });

    case types.SET_SESSION:
      return Object.assign({}, state, {
        session: {
          ...state.session,
          ...(action.payload || {})
        }
      });

    case types.SET_GOALS:
      return Object.assign({}, state, {
        goals: [...(action.payload || [])]
      });

    case types.SET_GOAL:
      return Object.assign({}, state, {
        goal: {
          ...state.goal,
          ...(action.payload || {})
        }
      });

    case types.FUND_GOAL:
      return Object.assign({}, state, {
        goal: {
          ...state.goal,
          saved: state.goal.saved + Number(action.payload)
        }
      });

    case types.WITHDRAW_GOAL:
      return Object.assign({}, state, {
        goal: {
          ...state.goal,
          saved: state.goal.saved - Number(action.payload)
        }
      });

    case types.SET_GOAL_USERS:
      return Object.assign({}, state, {
        goalUsers: [...(action.payload || [])]
      });

    case types.SET_GOAL_TRANSACTIONS:
      return Object.assign({}, state, {
        goalTransactions: [...state.goalTransactions, ...(action.payload || [])]
      });

    case types.SET_SUMMARY:
      return Object.assign({}, state, {
        summary: {
          ...state.summary,
          ...(action.payload || {})
        }
      });

    case types.SET_BALANCE:
      return Object.assign({}, state, {
        balance: {
          ...state.balance,
          ...(action.payload || {})
        }
      });

    case types.ADD_BALANCE:
      return Object.assign({}, state, {
        balance: {
          balance: state.balance.balance + Number(action.payload)
        }
      });

    case types.WITHDRAW_BALANCE:
      return Object.assign({}, state, {
        balance: {
          balance:
            state.balance.balance -
            (Number(action.payload) + Number(action.payload) * 0.02)
        }
      });

    case types.SET_PAYEES:
      return Object.assign({}, state, {
        payees: [...(action.payload || [])]
      });

    case types.SET_PAYEE_ACCOUNTS:
      return Object.assign({}, state, {
        payeeAccounts: [...(action.payload || [])]
      });

    case types.SET_REFERENCE:
      return Object.assign({}, state, {
        reference: {
          ...state.reference,
          ...(action.payload || {})
        }
      });

    case types.ADD_PAYMENT_METHODS:
      return Object.assign({}, state, {
        paymentMethods: [...state.paymentMethods, action.payload]
      });

    case types.SET_PAYMENT_METHODS:
      return Object.assign({}, state, {
        paymentMethods: [...(action.payload || [])]
      });

    case types.SET_PAYMENT_METHOD:
      return Object.assign({}, state, {
        paymentMethod: {
          ...state.paymentMethod,
          ...(action.payload || {})
        }
      });

    case types.SET_ACTIVTIES:
      return Object.assign({}, state, {
        activities: [...(action.payload || [])]
      });

    case types.SET_ACTIVITY:
      return Object.assign({}, state, {
        activity: { ...(action.payload || {}) }
      });

    case types.SET_TRANSACTION:
      return Object.assign({}, state, {
        transaction: { ...state.transaction, ...(action.payload || {}) }
      });

    case types.SET_AUTHORIZE:
      return Object.assign({}, state, {
        authorize: {
          ...state.authorize,
          ...(action.payload || {})
        }
      });

    case types.SET_AUTHORIZE_AND_TRANSACTION:
      return Object.assign({}, state, {
        authorize: {
          ...state.authorize,
          ...(action.payload.authorize || {})
        },
        transaction: {
          ...state.transaction,
          ...(action.payload.transaction || {})
        }
      });

    case types.SET_REFERENCE_AND_TRANSACTION:
      return Object.assign({}, state, {
        reference: { ...state.reference, ...(action.payload.reference || {}) },
        transaction: {
          ...state.transaction,
          ...(action.payload.transaction || {})
        }
      });

    case types.SET_VODA_TOKEN:
      return Object.assign({}, state, {
        getVodaToken: {
          ...state.getVodaToken,
          ...(action.payload || {})
        }
      });

    case types.SET_CARD_CVV:
      return Object.assign({}, state, {
        getCardCvv: {
          ...state.getCardCvv,
          ...(action.payload || {})
        }
      });

    case types.SET_SCHEDULE:
      return Object.assign({}, state, {
        schedule: {
          ...state.schedule,
          ...(action.payload || {})
        }
      });

    case types.SET_SCHEDULES:
      return Object.assign({}, state, {
        schedules: [...(action.payload || [])]
      });

    case types.SET_REWARD_POINTS:
      return Object.assign({}, state, {
        rewards: {
          ...state.rewards,
          ...(action.payload || {})
        }
      });

    case types.SET_BUTTON:
      return Object.assign({}, state, {
        buttonSubmitted: action.payload
      });

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const StoreContext = React.createContext();

export const DispatchContext = React.createContext();
