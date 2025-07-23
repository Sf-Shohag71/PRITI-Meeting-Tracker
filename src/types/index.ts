export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description?: string;
  time: string;
  attendees: Attendee[];
}

export interface Attendee {
  email: string;
  status: "Yes" | "No" | "Maybe";
}

export interface EventState {
  events: Event[];
}

export type EventAction = { type: "ADD_EVENT"; payload: Event };

export interface EventContextType {
  state: EventState;
  dispatch: React.Dispatch<EventAction>;
  addEvent: (event: Omit<Event, "id">) => void;
}
