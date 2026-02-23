import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { showToast } from "../components/ToastProvider";
import "./Checkout.css";

export default function Checkout() {
  const navigate = useNavigate();
  const [placed, setPlaced] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    card: "",
  });

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const placeOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, address, city, zip, card } = form;
    if (!name || !email || !address || !city || !zip || !card) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200)); // mock delay
    setLoading(false);
    setPlaced(true);
    showToast("Order placed successfully!", "success");
  };

  if (placed) {
    return (
      <>
        <Navbar />
        <div className="page-wrapper">
          <div className="container">
            <div className="success-box card">
              <div className="success-icon">✅</div>
              <h2 className="success-title">Order Placed!</h2>
              <p className="success-msg">
                Thank you for your order. A confirmation will be sent to your
                email.
              </p>
              <button className="btn btn-primary" onClick={() => navigate("/")}>
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <div className="container">
          <div className="checkout-header">
            <h2 className="checkout-heading">Checkout</h2>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => navigate("/cart")}
            >
              ← Back to Cart
            </button>
          </div>

          <form onSubmit={placeOrder} className="checkout-layout">
            <div className="checkout-form-area">
              {/* Shipping */}
              <div className="card checkout-section">
                <h3 className="section-label">Shipping Information</h3>
                {error && <div className="auth-error">{error}</div>}
                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      className="form-input"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={set("name")}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      className="form-input"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={set("email")}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Address</label>
                  <input
                    className="form-input"
                    placeholder="123 Main St, Apt 4B"
                    value={form.address}
                    onChange={set("address")}
                  />
                </div>
                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label">City</label>
                    <input
                      className="form-input"
                      placeholder="New York"
                      value={form.city}
                      onChange={set("city")}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">ZIP Code</label>
                    <input
                      className="form-input"
                      placeholder="10001"
                      value={form.zip}
                      onChange={set("zip")}
                    />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="card checkout-section">
                <h3 className="section-label">Payment (Mock)</h3>
                <div className="form-group">
                  <label className="form-label">Card Number</label>
                  <input
                    className="form-input"
                    placeholder="1234 5678 9012 3456"
                    value={form.card}
                    maxLength={19}
                    onChange={(e) => {
                      const v = e.target.value.replace(/\D/g, "").slice(0, 16);
                      setForm((prev) => ({
                        ...prev,
                        card: v.match(/.{1,4}/g)?.join(" ") ?? v,
                      }));
                    }}
                  />
                </div>
                <p className="mock-note">
                  🔒 This is a demo — no real payment is processed.
                </p>
              </div>
            </div>

            {/* Summary */}
            <div className="card checkout-summary">
              <h3 className="section-label">Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>—</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span style={{ color: "#059669" }}>Free</span>
              </div>
              <hr className="summary-hr" />
              <div
                className="summary-row"
                style={{ fontWeight: 700, color: "#111" }}
              >
                <span>Total</span>
                <span>—</span>
              </div>
              <button
                id="place-order-btn"
                type="submit"
                className="btn btn-primary btn-full"
                style={{ marginTop: 16 }}
                disabled={loading}
              >
                {loading ? "Placing order…" : "Place Order"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
