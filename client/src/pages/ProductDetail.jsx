import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import {
  FaStar, FaShoppingCart, FaTruck, FaUndo, FaShieldAlt, FaCheckCircle,
  FaMinus, FaPlus, FaHeart, FaShareAlt, FaRulerCombined, FaBoxOpen,
  FaTag, FaMapMarkerAlt, FaInfoCircle, FaUser, FaPaperPlane, FaQuestionCircle
} from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id));
  
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("desc");
  const [activeImage, setActiveImage] = useState(0);
  const [pincode, setPincode] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState(null);

  // Reviews & Feedback States
  const [reviewsList, setReviewsList] = useState([
    { id: 1, name: "Rahul S.", rating: 5, date: "Oct 12, 2026", text: "Absolutely love this product! The quality is top-notch and it looks exactly like the pictures.", verified: true },
    { id: 2, name: "Priya M.", rating: 4, date: "Sep 28, 2026", text: "Very comfortable and sturdy. Assembly was quick. Just wish the color was slightly darker.", verified: true },
  ]);
  const [newReview, setNewReview] = useState({ rating: 5, text: "" });
  const [showReviewForm, setShowReviewForm] = useState(false);

  // Q&A States
  const [qnaList, setQnaList] = useState([
    { id: 1, question: "Is the fabric easy to clean?", answer: "Yes, it comes with removable, machine-washable covers." },
    { id: 2, question: "What is the weight capacity?", answer: "It can comfortably hold up to 350 kg." }
  ]);
  const [newQuestion, setNewQuestion] = useState("");

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#FAF7F2] px-4 text-center">
        <h2 className="font-serif text-3xl mb-4 text-[#111]">Product not found</h2>
        <Link to="/shop" className="bg-[#111] text-white px-8 py-3.5 rounded-full font-bold hover:bg-amber-400 hover:text-black transition-all">
          Back to Shop
        </Link>
      </div>
    );
  }

  const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;
  const emiPrice = Math.round(product.price / 6);
  const images = product.images || [product.image, product.image, product.image, product.image];

  const checkDelivery = (e) => {
    e.preventDefault();
    if(pincode.length === 6) {
      const deliveryDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' });
      setDeliveryStatus({ success: true, text: `Deliverable by ${deliveryDate}` });
    } else {
      setDeliveryStatus({ success: false, text: "Please enter a valid 6-digit pincode." });
    }
  };

  const handleBuyNow = () => {
    addToCart({ ...product, qty });
    navigate("/checkout");
  };

  // Handle Review Submit
  const submitReview = (e) => {
    e.preventDefault();
    if(!newReview.text.trim()) return;
    const review = {
      id: Date.now(),
      name: "You (Guest)", // Demo name
      rating: newReview.rating,
      date: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }),
      text: newReview.text,
      verified: true
    };
    setReviewsList([review, ...reviewsList]);
    setNewReview({ rating: 5, text: "" });
    setShowReviewForm(false);
    alert("Thank you! Your review has been submitted.");
  };

  // Handle Q&A Submit
  const submitQuestion = (e) => {
    e.preventDefault();
    if(!newQuestion.trim()) return;
    const qna = {
      id: Date.now(),
      question: newQuestion,
      answer: "Pending: Our team will answer this shortly."
    };
    setQnaList([qna, ...qnaList]);
    setNewQuestion("");
    alert("Your question has been posted.");
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-20">
      
      {/* ===== BREADCRUMBS ===== */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 text-xs tracking-wider text-gray-500 uppercase flex flex-wrap items-center gap-2">
          <Link to="/" className="hover:text-amber-500 transition">Home</Link><span>/</span>
          <Link to="/shop" className="hover:text-amber-500 transition">Shop</Link><span>/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-amber-500 transition">{product.category}</Link><span>/</span>
          <span className="text-[#111] font-semibold truncate max-w-[150px] md:max-w-xs">{product.name}</span>
        </div>
      </div>

      {/* ===== MAIN PRODUCT SECTION ===== */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10 grid lg:grid-cols-2 gap-8 lg:gap-16">
        
        {/* LEFT: IMAGES */}
        <div className="flex flex-col-reverse md:flex-row gap-4 lg:sticky lg:top-24 lg:h-fit">
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible w-full md:w-20 shrink-0 scrollbar-hide">
            {images.map((img, i) => (
              <button key={i} onClick={() => setActiveImage(i)}
                className={`w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                  activeImage === i ? "border-amber-500 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img} alt={`View ${i+1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <div className="relative flex-1 rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm group">
            {discount > 0 && (
              <span className="absolute top-4 left-4 z-10 bg-amber-500 text-black text-xs font-bold px-3 py-1.5 rounded-full tracking-wider shadow-lg">
                {discount}% OFF
              </span>
            )}
            <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
              <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors shadow-sm cursor-pointer"><FaHeart /></button>
              <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-amber-500 transition-colors shadow-sm cursor-pointer"><FaShareAlt /></button>
            </div>
            <img src={images[activeImage]} alt={product.name} className="w-full h-[350px] sm:h-[450px] md:h-[550px] object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>

        {/* RIGHT: DETAILS */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-600 font-bold">{product.category}</p>
            <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-md border border-green-200">In Stock</span>
          </div>
          
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#111] leading-tight mb-3">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-5 border-b border-gray-200 pb-5">
            <div className="flex items-center gap-1 text-amber-500 text-sm">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-gray-300" />
              <span className="text-gray-800 ml-1 font-bold">{product.rating}</span>
            </div>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-500 hover:text-amber-500 transition cursor-pointer underline decoration-dotted underline-offset-4">
              Read {reviewsList.length + 122} Reviews
            </span>
          </div>

          {/* Price Section */}
          <div className="mb-6 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-end gap-3 mb-1">
              <span className="text-3xl md:text-4xl font-bold text-[#111]">₹{product.price.toLocaleString("en-IN")}</span>
              {product.oldPrice && <span className="text-lg text-gray-400 line-through font-normal mb-1">₹{product.oldPrice.toLocaleString("en-IN")}</span>}
            </div>
            <p className="text-green-600 text-xs font-semibold mb-3 flex items-center gap-1"><FaCheckCircle /> Inclusive of all taxes</p>
            <div className="space-y-2 border-t border-gray-100 pt-3">
              <p className="text-sm text-gray-700 flex items-center gap-2"><FaTag className="text-amber-500" /> EMI starts from <strong>₹{emiPrice.toLocaleString("en-IN")}/month</strong></p>
              <p className="text-sm text-gray-700 flex items-center gap-2"><FaTag className="text-amber-500" /> Get 10% off with HDFC Bank Cards</p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600"><FaRulerCombined /></div>
              <div><p className="text-xs text-gray-500">Material</p><p className="font-semibold text-[#111] text-sm">{product.material}</p></div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600"><FaInfoCircle /></div>
              <div><p className="text-xs text-gray-500">Color</p><p className="font-semibold text-[#111] text-sm">{product.color}</p></div>
            </div>
          </div>

          {/* Pincode Checker */}
          <form onSubmit={checkDelivery} className="mb-6 bg-white p-5 rounded-2xl border border-gray-200">
            <label className="block text-xs font-bold tracking-wider text-gray-600 uppercase mb-3 flex items-center gap-2">
              <FaMapMarkerAlt className="text-amber-500"/> Check Delivery Date
            </label>
            <div className="flex gap-2">
              <input type="text" placeholder="Enter 6-digit Pincode" value={pincode} onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm transition-all" />
              <button type="submit" className="bg-[#111] text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-amber-400 hover:text-black transition-all">Check</button>
            </div>
            {deliveryStatus && (
              <p className={`text-xs mt-3 font-semibold flex items-center gap-1.5 ${deliveryStatus.success ? 'text-green-600' : 'text-red-500'}`}>
                {deliveryStatus.success && <FaCheckCircle />} {deliveryStatus.text}
              </p>
            )}
          </form>

          {/* Quantity + Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
            <div className="flex items-center justify-between border border-gray-300 rounded-full bg-white h-12 w-full sm:w-32 px-2">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-amber-500 transition"><FaMinus className="text-xs" /></button>
              <span className="font-bold text-[#111]">{qty}</span>
              <button onClick={() => setQty(Math.min(product.stock, qty + 1))} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-amber-500 transition"><FaPlus className="text-xs" /></button>
            </div>
            <button onClick={() => addToCart({ ...product, qty })} disabled={product.stock === 0}
              className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-[#111] hover:bg-amber-400 text-white hover:text-black h-12 px-6 rounded-full font-bold tracking-widest text-xs uppercase transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
          
          <button onClick={handleBuyNow} className="w-full mb-8 h-12 bg-white border-2 border-[#111] text-[#111] hover:bg-[#111] hover:text-white rounded-full font-bold tracking-widest text-xs uppercase transition-all duration-300">Buy It Now</button>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-2 border-t border-gray-200 pt-6">
            <div className="flex flex-col items-center text-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors"><FaTruck className="text-lg" /></div>
              <span className="text-[10px] text-gray-700 font-bold uppercase">Free Delivery</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2 border-x border-gray-200 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors"><FaUndo className="text-lg" /></div>
              <span className="text-[10px] text-gray-700 font-bold uppercase">30-Day Return</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors"><FaShieldAlt className="text-lg" /></div>
              <span className="text-[10px] text-gray-700 font-bold uppercase">5-Yr Warranty</span>
            </div>
          </div>

        </div>
      </div>

      {/* ===== TABS SECTION ===== */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-6">
        <div className="bg-white rounded-3xl border border-amber-400/20 shadow-sm overflow-hidden">
          <div className="flex overflow-x-auto border-b border-gray-200 bg-[#f9f9f9] scrollbar-hide">
            {[
              { id: "desc", label: "Description", icon: <FaBoxOpen /> },
              { id: "specs", label: "Specs", icon: <FaRulerCombined /> },
              { id: "delivery", label: "Delivery", icon: <FaTruck /> },
              { id: "reviews", label: "Reviews", icon: <FaStar /> },
            ].map((t) => (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 px-6 py-4 text-xs md:text-sm font-bold tracking-wider uppercase transition-colors border-b-2 whitespace-nowrap ${
                  tab === t.id ? "border-amber-500 text-amber-600 bg-white" : "border-transparent text-gray-500 hover:text-[#111]"
                }`}
              >
                {t.icon} {t.label}
              </button>
            ))}
          </div>

          <div className="p-6 md:p-10 text-gray-600 leading-relaxed text-sm md:text-base">
            {tab === "desc" && (
              <div className="max-w-3xl animate-fade-in">
                <h3 className="font-serif text-2xl text-[#111] mb-4">About this product</h3>
                <p className="mb-4 text-gray-700">{product.description}</p>
                <p className="mb-6 text-gray-600">Crafted with precision, this piece combines form and function perfectly. It's designed to be the focal point of your room while providing unmatched comfort.</p>
              </div>
            )}

            {tab === "specs" && (
              <div className="max-w-3xl animate-fade-in">
                <h3 className="font-serif text-2xl text-[#111] mb-4">Dimensions & Specifications</h3>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                  {[
                    { label: "Overall Dimensions", value: "W 84\" x D 36\" x H 32\"" },
                    { label: "Primary Material", value: product.material },
                    { label: "Color", value: product.color },
                    { label: "Frame Material", value: "Solid Wood" },
                  ].map((spec, i) => (
                    <div key={i} className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-500 text-sm">{spec.label}</span>
                      <span className="font-semibold text-[#111] text-sm text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === "delivery" && (
              <div className="max-w-3xl animate-fade-in">
                <h3 className="font-serif text-2xl text-[#111] mb-4">Delivery & Assembly</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 shrink-0"><FaTruck className="text-lg" /></div>
                    <div><h4 className="font-bold text-[#111] mb-1">Free White-Glove Delivery</h4><p className="text-sm text-gray-600">We deliver to all major cities in 5-7 business days.</p></div>
                  </div>
                </div>
              </div>
            )}

            {tab === "reviews" && (
              <div className="max-w-3xl animate-fade-in">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <h3 className="font-serif text-2xl text-[#111]">Customer Reviews</h3>
                  <button onClick={() => setShowReviewForm(!showReviewForm)} className="bg-[#111] hover:bg-amber-400 hover:text-black text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all">
                    Write a Review
                  </button>
                </div>

                {/* Review Form */}
                {showReviewForm && (
                  <form onSubmit={submitReview} className="bg-[#FAF7F2] p-5 rounded-2xl border border-amber-400/30 mb-8 animate-fade-in">
                    <h4 className="font-bold text-[#111] mb-4">Share your experience</h4>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm text-gray-600">Rating:</span>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button key={star} type="button" onClick={() => setNewReview({ ...newReview, rating: star })} className="text-xl cursor-pointer">
                          <FaStar className={star <= newReview.rating ? "text-amber-500" : "text-gray-300"} />
                        </button>
                      ))}
                    </div>
                    <textarea rows="3" placeholder="What did you like or dislike?" value={newReview.text} onChange={(e) => setNewReview({ ...newReview, text: e.target.value })} className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-amber-500 mb-3 text-sm" required></textarea>
                    <div className="flex gap-2">
                      <button type="submit" className="bg-[#111] text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-amber-400 hover:text-black transition-all flex items-center gap-2"><FaPaperPlane /> Submit</button>
                      <button type="button" onClick={() => setShowReviewForm(false)} className="text-gray-500 text-sm hover:underline">Cancel</button>
                    </div>
                  </form>
                )}

                {/* Reviews List */}
                <div className="space-y-6">
                  {reviewsList.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-5 last:border-0 animate-fade-in">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xs"><FaUser /></div>
                        <span className="font-bold text-[#111] text-sm">{review.name}</span>
                        {review.verified && <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Verified Buyer</span>}
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex text-amber-500 text-xs">
                          {[...Array(5)].map((_, i) => <FaStar key={i} className={i < review.rating ? "text-amber-500" : "text-gray-300"} />)}
                        </div>
                        <span className="text-xs text-gray-400">{review.date}</span>
                      </div>
                      <p className="text-sm text-gray-700">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ======================================================= */}
      {/* ✅ NAYA SECTION: CUSTOMER Q&A (Sawaal-Jawaab) */}
      {/* ======================================================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8">
        <div className="bg-white rounded-3xl border border-amber-400/20 shadow-sm p-6 md:p-10">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-gray-200 pb-6">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-[#111] flex items-center gap-3">
                <FaQuestionCircle className="text-amber-500" /> Customer Questions & Answers
              </h2>
              <p className="text-sm text-gray-500 mt-1">Have a doubt? Ask our community or the brand.</p>
            </div>
          </div>

          {/* Ask a Question Form */}
          <form onSubmit={submitQuestion} className="mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="text" 
                placeholder="Ask a question about this product..." 
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                className="flex-1 px-4 py-3 bg-[#FAF7F2] border border-gray-200 rounded-xl outline-none focus:border-amber-500 text-sm transition-all"
                required
              />
              <button type="submit" className="bg-[#111] hover:bg-amber-400 hover:text-black text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center justify-center gap-2">
                <FaPaperPlane /> Post Question
              </button>
            </div>
          </form>

          {/* Q&A List */}
          <div className="space-y-5">
            {qnaList.map((qna) => (
              <div key={qna.id} className="bg-[#FAF7F2] p-5 rounded-2xl border border-gray-100">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold text-xs shrink-0 mt-0.5">Q</div>
                  <p className="font-bold text-[#111] text-sm md:text-base">{qna.question}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white font-bold text-xs shrink-0 mt-0.5">A</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{qna.answer}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default ProductDetail;