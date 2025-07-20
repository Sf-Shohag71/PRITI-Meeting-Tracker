import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center gap-4 mt-12">
      <h2 className="text-white text-2xl font-semibold">
        404 - Page Not found
      </h2>
      <Link
        to="/"
        className="px-4 py-2 text-secondary border border-secondary rounded-sm hover:bg-secondary hover:text-white"
      >
        View all events
      </Link>
    </div>
  );
}
