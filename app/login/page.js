"use client";

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login UI submitted successfully!");
  };

  return (
    <main className="auth-container">
      <form className="auth-card" onSubmit={handleLogin}>
        <h1>Welcome Back</h1>
        <p>Login to your CampusLoop account</p>

        <label>Email Address</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" required />

        <button type="submit">Login</button>
      </form>
    </main>
  );
}