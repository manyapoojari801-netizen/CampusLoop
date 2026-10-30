
export default function LandingPage() {
  return (
    <section className="welcome-section">
      <div className="welcome-content">
        <h1>Welcome to CampusLoop!</h1>

        <p>
          Lost something on campus? Found something?
          Let's help reunite belongings with their owners.
        </p>

        <a href="/report" className="report-btn">
          Report an Item
        </a>
      </div>
    </section>
  );
}
