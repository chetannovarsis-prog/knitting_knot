import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLayout = ({ title, children }) => (
  <div className="min-h-screen bg-white text-black pt-40 pb-24 px-6 md:px-10 max-w-6xl mx-auto font-['Albert_Sans']">
    <div className="text-center mb-24">
      <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900">{title}</h1>
    </div>
    <div className="max-w-4xl mx-auto space-y-16">
      {children}
    </div>
  </div>
);

export const Privacy = () => (
  <PageLayout title="Privacy Policy">
    <section className="space-y-12 text-[0.95rem] leading-relaxed text-gray-800">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-black">Interpretation and Definitions</h2>
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-2 italic">Interpretation</h3>
          <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
          
          <h3 className="text-xl font-semibold mb-4 italic">Definitions</h3>
          <p>For the purposes of this Privacy Policy:</p>
          <ul className="space-y-4 ml-2">
            <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
            <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party...</li>
            <li><strong>Application</strong> refers to Knitting Knot, the software program provided by the Company.</li>
            <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our") refers to Bloom Knitting Knot LLP, 301, 3rd floor Vikram Urban Vijay Nagar Indore.</li>
            <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device...</li>
            <li><strong>Country</strong> refers to: Madhya Pradesh, India</li>
            <li><strong>Device</strong> means any device that can access the Service...</li>
            <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
            <li><strong>Service</strong> refers to the Application or the Website or both.</li>
            <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company...</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-black">Collecting and Using Your Personal Data</h2>
        <h3 className="text-xl font-semibold mb-4 italic">Types of Data Collected</h3>
        <div className="space-y-6">
          <p className="font-bold">Personal Data</p>
          <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information... personally identifiable information may include:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address, State, Province, ZIP/Postal code, City</li>
            <li>Usage Data</li>
          </ul>
        </div>
      </div>
      
      <div className="space-y-8">
        <h3 className="text-xl font-semibold italic">Usage Data</h3>
        <p>Usage Data is collected automatically when using the Service. It may include information such as Your Device’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
      </div>

      <div className="space-y-8">
        <h3 className="text-xl font-semibold italic">Information from Third-Party Social Media Services</h3>
        <p>The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Google</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
        </ul>
      </div>

      <div className="space-y-8">
        <h3 className="text-xl font-semibold italic">Information Collected while Using the Application</h3>
        <p>While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Information regarding your location</li>
          <li>Information from your Device’s phone book (contacts list)</li>
        </ul>
      </div>

      <div className="space-y-8">
        <h3 className="text-xl font-semibold italic text-black">Tracking Technologies and Cookies</h3>
        <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.</p>
        <div className="bg-gray-50/50 p-6 rounded-2xl space-y-4">
           <p><strong>Necessary / Essential Cookies</strong> (Session Cookies)</p>
           <p className="text-sm">Administered by: Us</p>
           <p className="text-sm">Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features.</p>
        </div>
      </div>

      <div className="space-y-8">
         <h2 className="text-2xl font-bold text-black">Use of Your Personal Data</h2>
         <p>The Company may use Personal Data for the following purposes:</p>
         <ul className="list-disc list-inside space-y-2 ml-4">
           <li><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</li>
           <li><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service.</li>
           <li><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased.</li>
           <li><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.</li>
           <li><strong>To provide You with news</strong>, special offers and general information about other goods, services and events.</li>
         </ul>
      </div>

      <div className="space-y-8">
         <h2 className="text-2xl font-bold text-black">Retention of Your Personal Data</h2>
         <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.</p>
      </div>

      <div className="space-y-8">
         <h2 className="text-2xl font-bold text-black">Transfer of Your Personal Data</h2>
         <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction.</p>
      </div>

      <div className="space-y-8">
         <h2 className="text-2xl font-bold text-black">Delete Your Personal Data</h2>
         <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You. Our Service may give You the ability to delete certain information about You from within the Service.</p>
      </div>

      <div className="space-y-8">
         <h2 className="text-2xl font-bold text-black border-none">Disclosure of Your Personal Data</h2>
         <h3 className="text-xl font-semibold italic text-black">Business Transactions</h3>
         <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
         
         <h3 className="text-xl font-semibold italic text-black">Law enforcement</h3>
         <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>

         <h3 className="text-xl font-semibold italic text-black">Other legal requirements</h3>
         <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to: Comply with a legal obligation, Protect and defend the rights or property of the Company, Prevent or investigate possible wrongdoing, Protect the personal safety of Users.</p>
      </div>

      <div className="space-y-8">
         <h2 className="text-2xl font-bold text-black">Security of Your Personal Data</h2>
         <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
      </div>

      <div className="space-y-8">
         <h2 className="text-2xl font-bold text-black">Children's Privacy</h2>
         <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us.</p>
      </div>

      <div className="space-y-8">
         <h2 className="text-2xl font-bold text-black border-none">Links to Other Websites</h2>
         <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
      </div>

      <div className="space-y-8">
         <h2 className="text-2xl font-bold text-black border-none">Changes to this Privacy Policy</h2>
         <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
      </div>
    </section>
  </PageLayout>
);

export const Returns = () => (
  <PageLayout title="Return and Refund Policy">
    <section className="space-y-12 text-[0.95rem] leading-relaxed text-gray-800">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-black">Return & Exchange Policy – Knitting Knot</h2>
        <div className="space-y-6">
          <p>1. Returns are only accepted in cases of damaged or defective products. If you receive an item that is damaged, defective, or faulty, we will gladly offer a return or replacement, subject to the terms of this policy.</p>
          <p>2. To initiate a return, customers must provide clear and valid video proof showing the damage or defect. The video should be recorded before the package is opened and should clearly display the product's condition and the specific issue.</p>
          <p>3. The video should begin immediately before unboxing and must clearly capture the damage or defect from multiple angles, ensuring that the issue is evident and visible. This helps our team assess the situation accurately.</p>
          <p>4. Returns without valid video proof will not be eligible for processing. It is important that the video is clear and meets the requirements stated above. Incomplete or unclear videos may result in delays or ineligibility for return or exchange.</p>
          <p>5. Once the video is verified by our quality control team, we will guide you through the next steps of the return or replacement process. This may involve returning the product or receiving a replacement, depending on the available stock and the nature of the issue.</p>
          <p>6. The returned product must be unused, unwashed, and in its original packaging, with all tags intact. We cannot process returns for items that have been worn, washed, or are missing original packaging and tags.</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-black">Cancellation Policy – Knitting Knot</h2>
        <div className="space-y-6">
          <p>1. Orders may be cancelled strictly before the dispatch process has been initiated. Once an order has entered the packing or shipping stage, it will no longer be eligible for cancellation under any circumstances.</p>
          <p>2. Once the order has been shipped, it is considered final and non-cancellable. We are unable to halt or reverse orders that are already in transit or handed over to the courier service.</p>
          <p>3. If you wish to cancel your order before it is shipped, please reach out to our support team as soon as possible. Timely communication increases the likelihood of your cancellation request being accommodated successfully.</p>
          <p>4. For eligible cancellations, refunds (if applicable) will be processed within 5 to 7 business days from the date of confirmation. Please note that actual refund timelines may vary depending on your payment method and banking provider.</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-black">Exchange Policy – Knitting Knot</h2>
        <div className="space-y-6">
          <p>1. We currently offer exchanges only for size, color-related issues. If you've ordered the wrong size, we'll be happy to assist you with an exchange, provided the size you need is available in stock. Please note that we do not accept exchanges for changes in style, color preference, or for any other reason beyond sizing.</p>
          <p>2. To qualify for an exchange, the product must be returned in its original, unused condition. This means the item must be unworn, unwashed, and free from any damage, stains, or fragrance. All original tags, labels, and packaging must be intact. Products that show signs of wear or use will not be eligible for exchange.</p>
          <p>3. Customers must raise an exchange request within 24–48 hours of receiving the order. Any requests made after this window may not be considered, as our exchange policy is time-sensitive to maintain product quality standards.</p>
        </div>
      </div>

      <div className="pt-12 border-t border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-black">Return & Exchange Policy – Knitting Knot (Terms & Conditions)</h2>
        <div className="space-y-6">
          <p>1. Returns are only accepted in cases of damaged or defective products. If you receive an item that is damaged, defective, or faulty, we will gladly offer a return or replacement, subject to the terms of this policy.</p>
          <p>2. To initiate a return, customers must provide clear and valid video proof showing the damage or defect. The video should be recorded before the package is opened and should clearly display the product's condition and the specific issue.</p>
          <p>3. The video should begin immediately before unboxing and must clearly capture the damage or defect from multiple angles, ensuring that the issue is evident and visible. This helps our team assess the situation accurately.</p>
          <p>4. Returns without valid video proof will not be eligible for processing. It is important that the video is clear and meets the requirements stated above. Incomplete or unclear videos may result in delays or ineligibility for return or exchange.</p>
          <p>5. Once the video is verified by our quality control team, we will guide you through the next steps of the return or replacement process. This may involve returning the product or receiving a replacement, depending on the available stock and the nature of the issue.</p>
          <p>6. The returned product must be unused, unwashed, and in its original packaging, with all tags intact. We cannot process returns for items that have been worn, washed, or are missing original packaging and tags.</p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export const Support = () => (
  <PageLayout title="Support Policy">
    <section className="space-y-12 text-[0.95rem] leading-relaxed text-gray-800">
      <h2 className="text-2xl font-bold text-center text-black mb-12">Bloom Knitting Knot Support Policy</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold mb-4 italic">1. Introduction</h3>
          <p>At Bloom Knitting Knot, we are committed to providing our customers with a delightful shopping experience... This Support Policy outlines our practices related to customer inquiries, product issues, returns, and general assistance.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 italic">2. Customer Support Channels</h3>
          <p>You can reach our support team through the following channels:</p>
          <ul className="list-none space-y-2 mt-4 ml-2">
            <li>• Email: <a href="mailto:support@bloomknittingknot.com" className="font-bold underline">support@bloomknittingknot.com</a></li>
            <li>• Live Chat: Available on our website during business hours</li>
          </ul>
        </div>

        <div>
           <h3 className="text-xl font-bold mb-4 italic">3. Support Hours</h3>
           <p>Our customer support team is available during the following hours (local time):</p>
           <ul className="list-none space-y-1 mt-4 ml-2">
             <li>• Monday to Friday: 9:00 AM – 6:00 PM</li>
             <li>• Saturday: 10:00 AM – 4:00 PM</li>
             <li>• Sunday & Public Holidays: Closed</li>
           </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 italic">4. Response Times</h3>
          <p>We aim to respond to all customer inquiries as follows:</p>
          <ul className="list-none space-y-2 mt-4 ml-2">
            <li>• Email & Contact Forms: Within 24–48 business hours</li>
            <li>• Live Chat & Phone: Immediate during business hours</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 italic">5. Order Support</h3>
          <p>For any order-related concerns (including tracking, cancellations, or changes):</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Contact us within 12 hours of placing your order for changes or cancellations.</li>
            <li>Once the order is shipped, changes or cancellations are no longer possible.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 italic">6. Return & Exchange Policy</h3>
          <p>Returns: Accepted within 7 days of delivery for unused, unworn items with tags.</p>
          <p>Exchanges: Allowed for size, color or style within 7 days, based on stock availability.</p>
          <p>Process: Email support@bloomknittingknot.com with your order number and reason for return/exchange.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 italic">7. Problem Reporting</h3>
          <p>If you receive a damaged or incorrect item, please provide:</p>
          <ul className="list-none space-y-1 mt-2 ml-2">
            <li>• Order number</li>
            <li>• Include clear photographs of the packaging and the product for resolution.</li>
            <li>• We will either replace the item or offer a refund/store credit based on the case.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 italic">8. Product Care Support</h3>
          <p>We provide care instructions with all our products. For any queries related to fabric care:</p>
          <ul className="list-none space-y-1 mt-2 ml-2">
            <li>• Refer to the care tag on the garment.</li>
            <li>• Contact our support team for advice on cotton care and longevity tips.</li>
          </ul>
        </div>

        <div>
           <h3 className="text-xl font-bold mb-4 italic">9. Feedback and Complaints</h3>
           <p>We welcome feedback—positive or constructive. For complaints, please email us directly with full details. We aim to resolve any issue with fairness and transparency.</p>
        </div>

        <div>
           <h3 className="text-xl font-bold mb-4 italic">10. Policy Updates</h3>
           <p>Bloom Knitting Knot reserves the right to modify this support policy at any time. All updates will be posted on our website.</p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export const Terms = () => (
  <PageLayout title="Terms and Conditions">
    <section className="space-y-12 text-[0.95rem] leading-relaxed text-gray-800">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-black">Interpretation</h2>
        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-black">Definitions</h2>
        <p>For the purposes of these Terms and Conditions:</p>
        <ul className="space-y-4 mt-4 ml-2">
          <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party...</li>
          <li><strong>Company</strong> refers to Bloom Knitting Knot LLP, 301, 3rd Floor Vikram Urban Vijay Nagar Indore.</li>
          <li><strong>Device</strong> means any device that can access the Service...</li>
          <li><strong>Service</strong> refers to the Application or the Website or both.</li>
          <li><strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-black">Acknowledgment</h2>
        <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
        <p className="mt-4">Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-black">Limitation of Liability</h2>
        <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms... shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
      </div>

      <div>
         <h2 className="text-2xl font-bold border-none text-black">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
         <p>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind.</p>
      </div>

      <div>
         <h2 className="text-2xl font-bold text-black font-medium">Governing Law</h2>
         <p>The laws of the Country, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
      </div>

      <div>
         <h2 className="text-2xl font-bold text-black border-none mb-6">Changes to These Terms and Conditions</h2>
         <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
      </div>

      <div className="flex flex-col items-center justify-center py-12 border-t border-gray-100 mt-20">
         <p className="font-bold mb-4">Contact Us</p>
         <p>By email: <a href="mailto:info@knittingknot.com" className="underline">info@knittingknot.com</a></p>
      </div>
    </section>
  </PageLayout>
);

export const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    { q: "What kind of products does Knitting Knot sell?", a: "Knitting Knot specializes in premium cotton clothing, featuring handcrafted designs, intricate knitting, and contemporary styles for the modern wardrobe." },
    { q: "Are your products sustainable or eco-friendly?", a: "Yes, we focus on high-quality natural fibers like cotton and prioritize ethical production processes." },
    { q: "Do you ship across India?", a: "We ship to almost all pincodes in India through our reliable courier partners." },
    { q: "What payments do you accept?", a: "We accept all major credit/debit cards, UPI, Net Banking, and popular wallets via our secure payment gateway." },
    { q: "How can I track my order?", a: "Once shipped, you'll receive a tracking ID via email or SMS to monitor your delivery status." },
    { q: "How can I reach you for support?", a: "You can email us at support@bloomknittingknot.com or reach out via our social media handles." }
  ];

  return (
    <PageLayout title="FAQ's About Knitting Knot">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/3">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">Commonly Asked Questions</h2>
        </div>
        <div className="lg:w-2/3 w-full space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-100 group">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-black transition-all"
              >
                <span className="text-lg font-medium text-gray-800 group-hover:text-black">{faq.q}</span>
                <span className={`transform transition-transform duration-300 text-2xl ${openIndex === idx ? 'rotate-45' : ''}`}>+</span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-gray-600 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center bg-gray-50 p-10 rounded-[2rem] mt-24">
        <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Welcome to our FAQ page! Here you'll find quick answers to common questions about orders, shipping, returns, payment, product details, and more. We've compiled this guide to help you shop with confidence and ease. If you need further assistance, feel free to contact our support team anytime.
        </p>
      </div>
    </PageLayout>
  );
};

export const Shipping = () => <PageLayout title="Shipping Policy"><ComingSoon title="Shipping" /></PageLayout>;
const ComingSoon = ({ title }) => (
  <div className="flex flex-col items-center justify-center py-40">
    <div className="w-16 h-1 bg-black mb-8"></div>
    <h3 className="text-2xl font-black uppercase tracking-widest text-gray-300">Coming Soon</h3>
    <p className="text-gray-400 mt-4 italic">We are updating our {title} content...</p>
  </div>
);
export const CollectionsPage = () => <ComingSoon title="Collections" />;
export const Shop = () => <ComingSoon title="Shop" />;
export const NewArrivals = () => <ComingSoon title="New Arrivals" />;
