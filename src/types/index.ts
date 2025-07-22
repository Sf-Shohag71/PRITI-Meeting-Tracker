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
