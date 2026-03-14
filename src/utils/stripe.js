import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

export function getStripe() {
  if (!stripePromise) {
    stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
}

export async function redirectToCheckout(priceId) {
  const stripe = await getStripe();
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: priceId, quantity: 1 }],
    mode: 'payment',
    successUrl: `${window.location.origin}/checkout/success`,
    cancelUrl: `${window.location.origin}/pricing`,
  });

  if (error) {
    console.error('Stripe checkout error:', error.message);
    alert('Something went wrong. Please try again.');
  }
}
