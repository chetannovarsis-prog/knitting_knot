import React from 'react';

const PageLayout = ({ title, children }) => (
  <div className="min-h-screen bg-white text-black px-10 py-32 max-w-4xl mx-auto">
    <h1 className="text-6xl font-black uppercase tracking-tighter mb-16 border-b-8 border-black pb-4 inline-block">{title}</h1>
    <div className="prose prose-lg max-w-none space-y-12">
      {children}
    </div>
  </div>
);

const ComingSoon = ({ title }) => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-10 border-t border-gray-100">
    <h1 className="text-6xl font-black uppercase tracking-tighter mb-4">{title}</h1>
    <p className="text-gray-400 font-bold uppercase tracking-[4px] text-xs">This experience is being curated. Check back soon.</p>
    <div className="mt-12 w-20 h-1 bg-black"></div>
  </div>
);

export const Shipping = () => (
  <PageLayout title="Shipping Policy">
    <section className="space-y-6">
      <h2 className="text-2xl font-black uppercase tracking-tight">Delivery Timelines</h2>
      <p className="text-gray-600 font-medium leading-relaxed">
        Our signature collections are curated with care. Once your order is confirmed, please allow 2-4 business days for processing. 
        Standard shipping typically delivers within 5-7 business days across domestic locations.
      </p>
    </section>
    <section className="space-y-6">
      <h2 className="text-2xl font-black uppercase tracking-tight">Shipping Rates</h2>
      <p className="text-gray-600 font-medium leading-relaxed">
        We offer flat-rate shipping on all domestic orders. Orders above ₹2,999 qualify for complimentary premium shipping. 
        International shipping rates are calculated at checkout based on destination and weight.
      </p>
    </section>
    <section className="space-y-6">
      <h2 className="text-2xl font-black uppercase tracking-tight">Tracking Your Order</h2>
      <p className="text-gray-600 font-medium leading-relaxed">
        Upon dispatch, a unique tracking identifier will be shared via email and SMS. You can monitor your shipment's progress 
        through our logistics partner's portal.
      </p>
    </section>
  </PageLayout>
);

export const Returns = () => (
  <PageLayout title="Returns & Exchanges">
    <section className="space-y-6">
      <h2 className="text-2xl font-black uppercase tracking-tight">Return Window</h2>
      <p className="text-gray-600 font-medium leading-relaxed">
        We maintain a 7-day return policy for all unworn, unwashed items in their original packaging with tags intact. 
        Items must be in pristine condition to qualify for a refund or exchange.
      </p>
    </section>
    <section className="space-y-6">
      <h2 className="text-2xl font-black uppercase tracking-tight">The Process</h2>
      <p className="text-gray-600 font-medium leading-relaxed">
        To initiate a return, please visit our self-service portal or reach out to our concierge team. Once approved, 
        a reverse pickup will be scheduled within 48 hours.
      </p>
    </section>
    <section className="space-y-6">
      <h2 className="text-2xl font-black uppercase tracking-tight">Exchanges</h2>
      <p className="text-gray-600 font-medium leading-relaxed">
        Size or color exchanges are subject to stock availability. If your desired replacement is out of stock, 
        a store credit or full refund will be issued.
      </p>
    </section>
  </PageLayout>
);

export const Shop = () => <ComingSoon title="Shop" />;
export const CollectionsPage = () => <ComingSoon title="Collections" />;
export const NewArrivals = () => <ComingSoon title="New Arrivals" />;
export const Privacy = () => (
  <PageLayout title="Privacy Policy">
    <section className="space-y-6">
      <h2 className="text-2xl font-black uppercase tracking-tight">Information Collection</h2>
      <p className="text-gray-600 font-medium leading-relaxed">
        We collect information you provide directly to us (name, email, shipping address) to process orders and provide a personalized luxury shopping experience. 
        Your data is encrypted and handled with the highest security standards.
      </p>
    </section>
    <section className="space-y-6">
      <h2 className="text-2xl font-black uppercase tracking-tight">Data Usage</h2>
      <p className="text-gray-600 font-medium leading-relaxed">
        KNITTING KNOT uses your information to fulfill orders, communicate updates, and (if opted-in) share exclusive collection previews. 
        We never sell your personal data to third parties.
      </p>
    </section>
    <section className="space-y-6">
      <h2 className="text-2xl font-black uppercase tracking-tight">Cookies & Tracking</h2>
      <p className="text-gray-600 font-medium leading-relaxed">
        Our platform uses cookies to enhance navigation, analyze site usage, and remember your shopping bag preferences. 
        You can manage cookie settings through your browser at any time.
      </p>
    </section>
  </PageLayout>
);

export const Terms = () => (
  <PageLayout title="Terms & Conditions">
    <section className="space-y-6">
      <h2 className="text-2xl font-black uppercase tracking-tight">Order Acceptance</h2>
      <p className="text-gray-600 font-medium leading-relaxed">
        All orders placed through knittingknot.com are subject to availability and acceptance. 
        We reserve the right to refuse or cancel orders due to pricing errors or stock discrepancies.
      </p>
    </section>
    <section className="space-y-6">
      <h2 className="text-2xl font-black uppercase tracking-tight">Intellectual Property</h2>
      <p className="text-gray-600 font-medium leading-relaxed">
        All content on this site, including designs, photography, and the "KNITTING KNOT" mark, is our intellectual property. 
        Unauthorized reproduction is strictly prohibited.
      </p>
    </section>
    <section className="space-y-6">
      <h2 className="text-2xl font-black uppercase tracking-tight">Limitation of Liability</h2>
      <p className="text-gray-600 font-medium leading-relaxed">
        KNITTING KNOT shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products 
        beyond the purchase price of the specific item.
      </p>
    </section>
  </PageLayout>
);

export default { Shipping, Returns, Shop, CollectionsPage, NewArrivals, Privacy, Terms };
