import React, { useReducer } from "react";
import {
  StoreContext,
  DispatchContext,
  reducer,
  initialState
} from "./Context.js";
import Theme from "../components/common/Theme.js";
import Overlays from "../components/overlays/Overlays.js";

const Provider = Component =>
  function Provider(props) {
    const [state, dispatch] = useReducer(reducer, {
      ...initialState,
      session: { ...initialState.session, ...props.user }
    });

    return (
      <StoreContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <Theme>
            <Overlays>
              <Component />
            </Overlays>
          </Theme>
        </DispatchContext.Provider>
      </StoreContext.Provider>
    );
  };

export default Provider;
