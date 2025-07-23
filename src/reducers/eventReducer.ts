import { EventAction, EventState } from "../types";
import { saveEvents } from "../utils/localStorage";

export function eventReducer(
  state: EventState,
  action: EventAction
): EventState {
  let updatedEvents: Event[];

  switch (action.type) {
    case "ADD_EVENT":
      updatedEvents = [...state.events, action.payload];
      saveEvents(updatedEvents);
      return { ...state, events: updatedEvents };

    default:
      return state;
  }
}
