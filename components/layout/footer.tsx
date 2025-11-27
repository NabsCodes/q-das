export default function Footer() {
  return (
    <footer className="bg-navy-900 mt-auto text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-lg font-semibold">Q-DAS Global</div>
          <p>
            &copy; {new Date().getFullYear()} Q-DAS Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
