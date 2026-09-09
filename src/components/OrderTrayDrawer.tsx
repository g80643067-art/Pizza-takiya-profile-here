import React, { useState, useRef, useEffect } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, MapPin, Phone, User, AlertCircle, Sparkles } from 'lucide-react';
import { CartItem } from '../types';
import { getCartWhatsAppUrl } from '../utils/whatsapp';

interface OrderTrayDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const OrderTrayDrawer: React.FC<OrderTrayDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [customerName, setCustomerName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');

  const [nameError, setNameError] = useState('');
  const [contactError, setContactError] = useState('');
  const [addressError, setAddressError] = useState('');

  const nameInputRef = useRef<HTMLInputElement>(null);
  const contactInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLTextAreaElement>(null);

  const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const isDeliveryEligible = totalAmount >= 500;
  const deliveryShortfall = Math.max(0, 500 - totalAmount);

  // Automatically revert to pickup if total amount drops below ₹500 (e.g. quantity decreased/removed)
  useEffect(() => {
    if (totalAmount < 500 && orderType === 'delivery') {
      setOrderType('pickup');
      setContactError('');
      setAddressError('');
    }
  }, [totalAmount, orderType]);

  if (!isOpen) return null;

  const handleSendOrder = () => {
    let hasError = false;

    // 1. Customer Name is mandatory for ALL orders
    const trimmedName = customerName.trim();
    if (!trimmedName) {
      setNameError('Please enter your name.');
      if (!hasError && nameInputRef.current) {
        nameInputRef.current.focus();
      }
      hasError = true;
    } else {
      setNameError('');
    }

    // 2. If Home Delivery is selected, Contact Number and Delivery Location are mandatory
    if (orderType === 'delivery') {
      if (!isDeliveryEligible) {
        setOrderType('pickup');
        return;
      }

      const trimmedContact = contactNumber.trim();
      if (!trimmedContact) {
        setContactError('Please enter your contact number.');
        if (!hasError && contactInputRef.current) {
          contactInputRef.current.focus();
        }
        hasError = true;
      } else if (trimmedContact.replace(/\D/g, '').length < 8) {
        setContactError('Please enter a valid phone number.');
        if (!hasError && contactInputRef.current) {
          contactInputRef.current.focus();
        }
        hasError = true;
      } else {
        setContactError('');
      }

      const trimmedAddress = deliveryAddress.trim();
      if (!trimmedAddress) {
        setAddressError('Please enter your delivery location / address in Patan.');
        if (!hasError && addressInputRef.current) {
          addressInputRef.current.focus();
        }
        hasError = true;
      } else {
        setAddressError('');
      }
    }

    // Do NOT open WhatsApp if any required field is missing
    if (hasError) return;

    const url = getCartWhatsAppUrl(items, totalAmount, {
      customerName: trimmedName,
      orderType,
      contactNumber: orderType === 'delivery' ? contactNumber.trim() : undefined,
      deliveryAddress: orderType === 'delivery' ? deliveryAddress.trim() : undefined,
      notes: specialNotes.trim(),
    });
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="order-tray-title">
      {/* Dark Luxury Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel - Full width on mobile (320px-430px), max-w-md on desktop */}
      <div className="fixed inset-y-0 right-0 w-full sm:max-w-md flex flex-col z-10 bg-[#1C1916] text-[#F4EBDD] border-l border-[#D8B45A]/25 shadow-2xl">
        
        {/* 1. Header */}
        <div className="px-4 py-4 sm:px-5 sm:py-4.5 border-b border-[#D8B45A]/20 bg-[#141311] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 bg-[#1C1916] border border-[#D8B45A]/40 text-[#D8B45A] flex items-center justify-center shrink-0 shadow-xs">
              <ShoppingBag className="w-5 h-5 text-[#D8B45A]" />
            </div>
            <div className="min-w-0">
              <h2 id="order-tray-title" className="font-display font-black text-sm sm:text-base uppercase tracking-wider text-[#F4EBDD] leading-tight truncate">
                YOUR ORDER TRAY
              </h2>
              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#D8B45A] mt-0.5">
                {totalItemsCount} {totalItemsCount === 1 ? 'ITEM' : 'ITEMS'} SELECTED
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#F4EBDD]/60 hover:text-[#D8B45A] hover:bg-[#1C1916] border border-transparent hover:border-[#D8B45A]/20 transition-all cursor-pointer shrink-0 ml-2"
            aria-label="Close tray"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2. Order Items List */}
        <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-5 bg-[#141311] divide-y divide-[#D8B45A]/15">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-4 px-2">
              <div className="w-14 h-14 bg-[#1C1916] border border-[#D8B45A]/30 text-[#D8B45A] flex items-center justify-center mx-auto text-2xl">
                🍕
              </div>
              <div className="space-y-1.5">
                <h3 className="font-display font-black text-base text-[#F4EBDD] uppercase tracking-wide">
                  Your tray is empty
                </h3>
                <p className="text-xs text-[#F4EBDD]/60 max-w-xs mx-auto leading-relaxed">
                  Select gourmet pizzas, burgers, combos or beverages from our menu to build your complete order.
                </p>
              </div>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2.5 bg-[#D8B45A] hover:bg-[#C9A44B] text-[#141311] text-xs font-black uppercase tracking-widest transition-all cursor-pointer active:scale-95 shadow-md"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            items.map((item) => {
              const itemTotal = item.price * item.quantity;
              return (
                <div key={item.id} className="py-3.5 first:pt-0 last:pb-0 flex items-start justify-between gap-3">
                  {/* Left Column: Item Name, Price & Customizations */}
                  <div className="flex-1 min-w-0 pr-1">
                    <h4 className="font-display font-bold text-sm text-[#F4EBDD] leading-snug break-words">
                      {item.name}
                    </h4>

                    {/* Price & Unit Details directly underneath */}
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-xs font-black text-[#D8B45A] tracking-wide">
                        ₹{itemTotal}
                      </span>
                      {item.quantity > 1 && (
                        <span className="text-[10px] font-semibold text-[#F4EBDD]/50">
                          (₹{item.price} each)
                        </span>
                      )}
                    </div>

                    {/* Variant & Addons text */}
                    {(item.size || item.extraCheese || item.extraTopping) && (
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1 text-[11px] text-[#F4EBDD]/65">
                        {item.size && (
                          <span className="font-bold text-[#A88945]">
                            Size: {item.size}
                          </span>
                        )}
                        {item.extraCheese && (
                          <span className="text-emerald-400 font-semibold">
                            • Extra Cheese
                          </span>
                        )}
                        {item.extraTopping && (
                          <span className="text-emerald-400 font-semibold">
                            • Extra Topping
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Right Column: Quantity Stepper & Remove Trash Button */}
                  <div className="flex items-center gap-2 shrink-0 pt-0.5">
                    {/* Stepper Box */}
                    <div className="flex items-center border border-[#D8B45A]/35 bg-[#1C1916]">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1.5 hover:bg-[#D8B45A]/10 text-[#F4EBDD]/80 hover:text-[#D8B45A] transition-colors cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-7 text-center text-xs font-black text-[#F4EBDD] tabular-nums select-none">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-1.5 hover:bg-[#D8B45A]/10 text-[#F4EBDD]/80 hover:text-[#D8B45A] transition-colors cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Trash Button */}
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-1.5 text-[#F4EBDD]/40 hover:text-red-400 hover:bg-[#1C1916] transition-colors cursor-pointer"
                      title="Remove item from tray"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* 3. Footer / Summary / Customer Details / WhatsApp Action */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-[#D8B45A]/25 bg-[#181613] space-y-3.5 shrink-0 overflow-y-auto max-h-[70vh] sm:max-h-[60vh]">
            
            {/* Delivery Option Selector */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-[#D8B45A]">
                <span>ORDER FULFILLMENT</span>
                {isDeliveryEligible ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1 normal-case tracking-normal text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    Delivery Eligible (₹500+)
                  </span>
                ) : (
                  <span className="text-amber-400/80 font-bold text-[10px] normal-case tracking-normal">
                    Delivery at ₹500+
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2">
                {/* 1. Pickup / Dine-In */}
                <button
                  type="button"
                  onClick={() => {
                    setOrderType('pickup');
                    setContactError('');
                    setAddressError('');
                  }}
                  className={`py-2 px-2.5 text-center text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                    orderType === 'pickup'
                      ? 'bg-[#D8B45A] text-[#141311] border-[#D8B45A] shadow-sm font-black'
                      : 'bg-[#141311] text-[#F4EBDD]/70 border-[#D8B45A]/25 hover:border-[#D8B45A]/50 hover:text-[#F4EBDD]'
                  }`}
                >
                  <span className="text-[11px] sm:text-xs">🍽️ Pickup / Dine-In</span>
                  <span className={`text-[9px] normal-case tracking-normal ${orderType === 'pickup' ? 'text-[#141311]/80 font-semibold' : 'text-[#F4EBDD]/40'}`}>
                    Pay at café counter
                  </span>
                </button>

                {/* 2. Home Delivery (Only when total >= ₹500) */}
                <button
                  type="button"
                  onClick={() => {
                    if (isDeliveryEligible) {
                      setOrderType('delivery');
                    }
                  }}
                  disabled={!isDeliveryEligible}
                  className={`py-2 px-2.5 text-center text-xs font-bold uppercase tracking-wider border transition-all flex flex-col items-center justify-center gap-0.5 ${
                    orderType === 'delivery'
                      ? 'bg-[#D8B45A] text-[#141311] border-[#D8B45A] shadow-sm font-black cursor-pointer'
                      : isDeliveryEligible
                      ? 'bg-[#141311] text-[#F4EBDD]/70 border-[#D8B45A]/25 hover:border-[#D8B45A]/50 hover:text-[#F4EBDD] cursor-pointer'
                      : 'bg-[#141311]/60 text-[#F4EBDD]/30 border-[#F4EBDD]/10 cursor-not-allowed opacity-60'
                  }`}
                  title={!isDeliveryEligible ? `Home delivery is available for orders ₹500 or more. Add ₹${deliveryShortfall} more!` : 'Select Home Delivery'}
                >
                  <span className="text-[11px] sm:text-xs flex items-center gap-1">
                    🛵 Home Delivery
                  </span>
                  <span className={`text-[9px] normal-case tracking-normal ${
                    orderType === 'delivery'
                      ? 'text-[#141311]/80 font-semibold'
                      : isDeliveryEligible
                      ? 'text-emerald-400 font-semibold'
                      : 'text-amber-400/90 font-semibold'
                  }`}>
                    {isDeliveryEligible ? 'Available (Min ₹500)' : `Add ₹${deliveryShortfall} more`}
                  </span>
                </button>
              </div>

              {/* Informative notice for Home Delivery unlock */}
              {!isDeliveryEligible && (
                <div className="p-2.5 bg-[#141311] border border-amber-500/30 text-[11px] text-amber-300/90 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">🛵</span>
                    <span className="leading-tight">
                      Home Delivery is available on orders of <strong className="text-[#D8B45A]">₹500+</strong>. Add <strong className="text-[#D8B45A]">₹{deliveryShortfall}</strong> more to qualify.
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-[10px] font-black uppercase text-[#D8B45A] hover:underline whitespace-nowrap cursor-pointer shrink-0"
                  >
                    + Add More
                  </button>
                </div>
              )}

              {isDeliveryEligible && orderType === 'delivery' && (
                <div className="p-2 bg-emerald-950/40 border border-emerald-500/35 text-[11px] text-emerald-300 flex items-center gap-2">
                  <span className="text-sm">🛵</span>
                  <span className="leading-tight font-medium">
                    Home Delivery selected for Patan. Please provide your contact number and exact delivery address below.
                  </span>
                </div>
              )}
            </div>

            {/* Customer Details Form */}
            <div className="space-y-2.5">
              {/* Field 1: Customer Name (Mandatory for all orders) */}
              <div>
                <label className="flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-[#D8B45A] mb-1">
                  <span>
                    CUSTOMER NAME <span className="text-red-400 font-black">*</span>
                  </span>
                  {nameError && (
                    <span className="text-[10px] font-bold text-red-400 normal-case tracking-normal">
                      Required
                    </span>
                  )}
                </label>
                <input
                  ref={nameInputRef}
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={customerName}
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                    if (e.target.value.trim()) {
                      setNameError('');
                    }
                  }}
                  className={`w-full max-w-full px-3.5 py-2.5 text-xs bg-[#141311] border text-[#F4EBDD] placeholder:text-[#F4EBDD]/30 focus:outline-none transition-colors ${
                    nameError
                      ? 'border-red-500/80 bg-red-950/20 focus:border-red-400'
                      : 'border-[#D8B45A]/30 focus:border-[#D8B45A]'
                  }`}
                />
                {nameError && (
                  <p className="text-[11px] font-semibold text-red-400 mt-1 flex items-center gap-1.5">
                    <span>⚠️</span>
                    <span>Please enter your name.</span>
                  </p>
                )}
              </div>

              {/* Home Delivery Required Fields */}
              {orderType === 'delivery' && (
                <>
                  {/* Field 2: Contact Number (Required for Delivery) */}
                  <div>
                    <label className="flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-[#D8B45A] mb-1">
                      <span>
                        CONTACT NUMBER <span className="text-red-400 font-black">*</span>
                      </span>
                      {contactError && (
                        <span className="text-[10px] font-bold text-red-400 normal-case tracking-normal">
                          Required
                        </span>
                      )}
                    </label>
                    <input
                      ref={contactInputRef}
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210 (For delivery rider)"
                      value={contactNumber}
                      onChange={(e) => {
                        setContactNumber(e.target.value);
                        if (e.target.value.trim()) {
                          setContactError('');
                        }
                      }}
                      className={`w-full max-w-full px-3.5 py-2.5 text-xs bg-[#141311] border text-[#F4EBDD] placeholder:text-[#F4EBDD]/30 focus:outline-none transition-colors ${
                        contactError
                          ? 'border-red-500/80 bg-red-950/20 focus:border-red-400'
                          : 'border-[#D8B45A]/30 focus:border-[#D8B45A]'
                      }`}
                    />
                    {contactError && (
                      <p className="text-[11px] font-semibold text-red-400 mt-1 flex items-center gap-1.5">
                        <span>⚠️</span>
                        <span>{contactError}</span>
                      </p>
                    )}
                  </div>

                  {/* Field 3: Delivery Location / Address (Required for Delivery) */}
                  <div>
                    <label className="flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-[#D8B45A] mb-1">
                      <span>
                        DELIVERY LOCATION / ADDRESS <span className="text-red-400 font-black">*</span>
                      </span>
                      {addressError && (
                        <span className="text-[10px] font-bold text-red-400 normal-case tracking-normal">
                          Required
                        </span>
                      )}
                    </label>
                    <textarea
                      ref={addressInputRef}
                      rows={2}
                      required
                      placeholder="e.g. Flat 302, Shivalik Pride, Near Station Road, Patan"
                      value={deliveryAddress}
                      onChange={(e) => {
                        setDeliveryAddress(e.target.value);
                        if (e.target.value.trim()) {
                          setAddressError('');
                        }
                      }}
                      className={`w-full max-w-full px-3.5 py-2 text-xs bg-[#141311] border text-[#F4EBDD] placeholder:text-[#F4EBDD]/30 focus:outline-none transition-colors resize-none ${
                        addressError
                          ? 'border-red-500/80 bg-red-950/20 focus:border-red-400'
                          : 'border-[#D8B45A]/30 focus:border-[#D8B45A]'
                      }`}
                    />
                    {addressError && (
                      <p className="text-[11px] font-semibold text-red-400 mt-1 flex items-center gap-1.5">
                        <span>⚠️</span>
                        <span>{addressError}</span>
                      </p>
                    )}
                  </div>
                </>
              )}

              {/* Field 4: Special Notes / Instructions (Optional for all) */}
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-[#D8B45A]/90 mb-1">
                  Special Notes / Instructions (Optional)
                </label>
                <input
                  type="text"
                  placeholder={orderType === 'delivery' ? 'e.g. Ring bell, call upon arrival, extra spicy' : 'e.g. Extra spicy, less oregano, pickup in 20 mins'}
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full max-w-full px-3.5 py-2.5 text-xs bg-[#141311] border border-[#D8B45A]/30 text-[#F4EBDD] placeholder:text-[#F4EBDD]/30 focus:border-[#D8B45A] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Visually Strong Total Area - Always Fully Visible */}
            <div className="flex items-center justify-between py-2.5 px-3.5 bg-[#141311] border border-[#D8B45A]/25">
              <div>
                <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-widest text-[#A88945] block">
                  ESTIMATED TOTAL:
                </span>
                <span className="text-[10px] text-[#F4EBDD]/50 uppercase font-medium">
                  {orderType === 'delivery' ? 'Home Delivery in Patan' : 'Pickup / Dine-In'}
                </span>
              </div>
              <span className="text-xl sm:text-2xl font-black font-display text-[#D8B45A] tracking-tight tabular-nums whitespace-nowrap">
                ₹{totalAmount}
              </span>
            </div>

            {/* Main CTA: WhatsApp Button */}
            <button
              onClick={handleSendOrder}
              className="w-full min-h-[48px] py-3 px-4 font-black uppercase tracking-wider text-xs sm:text-sm text-[#141311] bg-[#D8B45A] hover:bg-[#C9A44B] shadow-[0_0_20px_rgba(216,180,90,0.25)] hover:shadow-[0_0_25px_rgba(216,180,90,0.45)] flex items-center justify-center gap-2.5 transition-all active:scale-[0.99] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-[#141311] shrink-0" />
              <span>SEND ORDER TO WHATSAPP</span>
            </button>

            {/* Bottom Actions: Clear Tray & Pay Notice */}
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] uppercase tracking-wider text-[#F4EBDD]/60 pt-0.5">
              <button
                onClick={onClearCart}
                className="text-[#F4EBDD]/50 hover:text-red-400 underline underline-offset-4 cursor-pointer font-bold transition-colors"
              >
                Clear Tray
              </button>
              <span className="font-semibold text-[#D8B45A]/90 tracking-wider">
                {orderType === 'delivery' ? '🛵 PAY ON DELIVERY (CASH / UPI)' : '🍽️ PAY AT PICKUP / DINE-IN'}
              </span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
