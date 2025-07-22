import { createContext, useReducer } from "react";
import { Event, type EventContextType } from "../types";

const EventContext = createContext<EventContextType | undefined>(undefined);

export function EventProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(eventReducer, getInitialState());
  function addEvent(eventData: Omit<Event, "id">) {
    const newEvent: Event = {
      ...eventData,
      id: crypto.randomUUID(),
    };
    dispatch({ type: "ADD_EVENT", payload: newEvent });
  }

  const value: EventContextType = {
    state,
    dispatch,
    addEvent,
  };

  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
}

export function useEventContext() {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error("useEventContext must be used within an EventProvider");
  }
  return context;
}
