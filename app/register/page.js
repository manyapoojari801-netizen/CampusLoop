"use client";

export default function Register() {
  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registration form submitted!");
  };

  return (
    <main className="auth-container">
      <form className="auth-card" onSubmit={handleRegister}>
        <h1>Create Account</h1>
        <p>Join the CampusLoop community</p>

        <label>Full Name</label>
        <input type="text" placeholder="Enter your name" required />

        <label>College Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password</label>
        <input type="password" placeholder="Create a password" required />

        <button type="submit">Register</button>
      </form>
    </main>
  );
}