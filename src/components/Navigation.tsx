import { Calendar, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-secondary p-4 sm:px-6 py-4 flex gap-4 flex-wrap justify-between items-center text-primary 2xl:bg-tertiary 2xl:text-white *:px- *:py-2 *:rounded *:flex *gap-2 *:border">
      <Link to="/" className="border-primary 2xl:border-white px-4 py-2 gap-2">
        <Calendar />
        Events
      </Link>
      <Link
        to="/create"
        className="border-primary 2xl:border-white px-4 py-2 gap-2"
      >
        <Plus />
        Create an Event
      </Link>
    </nav>
  );
}
