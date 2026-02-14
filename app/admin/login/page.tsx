/**
 * Admin Login Page
 *
 * Simple authentication page for admin dashboard access.
 * Uses Supabase Auth with email/password authentication.
 *
 * @module app/admin/login/page
 */

"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Header, Footer, Main, Navigation } from "@/components/layout";
import { Container, Section, Heading, Paragraph, Button } from "@/components";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        router.push("/dashboard");
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header>
        <Navigation />
      </Header>

      <Main>
        <Section spacing="xl">
          <Container size="sm">
            <div className="mx-auto max-w-md">
              <div className="text-center mb-8">
                <Heading level={1} className="mb-4">
                  Admin Login
                </Heading>
                <Paragraph>
                  Enter your credentials to access the dashboard
                </Paragraph>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-danger/10 border border-danger/20 rounded-lg text-danger text-sm">
                      {error}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-input-border rounded-lg bg-input text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="admin@truqorun.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-input-border rounded-lg bg-input text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="••••••••"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
              </div>

              <p className="text-center text-sm text-foreground-secondary mt-6">
                This is a secure admin area. Only authorized users can access.
              </p>
            </div>
          </Container>
        </Section>
      </Main>

      <Footer />
    </div>
  );
}
