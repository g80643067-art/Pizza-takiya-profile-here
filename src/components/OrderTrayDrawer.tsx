import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
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
  const [customerName, setCustomerName] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');

  if (!isOpen) return null;

  const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleSendOrder = () => {
    const url = getCartWhatsAppUrl(items, totalAmount, customerName, specialNotes);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#1C1916] text-[#F4EBDD] border-l border-[#D8B45A]/25 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-5 border-b border-[#D8B45A]/20 flex items-center justify-between bg-[#141311] text-[#F4EBDD]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#1C1916] border border-[#D8B45A]/40 text-[#D8B45A] flex items-center justify-center font-bold shadow-xs">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-black text-sm uppercase tracking-tight font-display text-[#F4EBDD]">Your Order Tray</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D8B45A]">
                  {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'} selected
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#F4EBDD]/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close tray"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-[#D8B45A]/15 bg-[#141311]">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#1C1916] text-[#D8B45A] border border-[#D8B45A]/30 flex items-center justify-center mx-auto text-2xl">
                  🍕
                </div>
                <h4 className="font-black text-base text-[#F4EBDD] font-display">Your tray is empty</h4>
                <p className="text-xs text-[#F4EBDD]/60 max-w-xs mx-auto leading-relaxed">
                  Add artisan pizzas, gourmet burgers, combos or drinks from our menu to build your complete order.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-6 py-2.5 rounded-full bg-[#D8B45A] hover:bg-[#C9A44B] text-[#141311] text-xs font-bold uppercase tracking-widest transition-all active:scale-95 shadow-md cursor-pointer"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="pt-3 first:pt-0 flex items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-black text-[#F4EBDD] font-display truncate">
                      {item.name}
                    </h4>
                    <div className="text-[11px] text-[#F4EBDD]/60 space-y-0.5">
                      {item.size && <span className="font-bold text-[#D8B45A]">Size: {item.size} </span>}
                      {item.extraCheese && <span className="text-emerald-400 font-bold">• Extra Cheese </span>}
                      {item.extraTopping && <span className="text-emerald-400 font-bold">• Extra Topping</span>}
                    </div>
                    <span className="text-xs font-black text-[#D8B45A] font-display mt-1 block">
                      ₹{item.price} each
                    </span>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-[#D8B45A]/30 rounded-full overflow-hidden bg-[#1C1916] shadow-xs">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1.5 hover:bg-white/5 text-[#F4EBDD]/80 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-7 text-center text-xs font-black text-[#F4EBDD]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-1.5 hover:bg-white/5 text-[#F4EBDD]/80 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-1.5 text-[#F4EBDD]/40 hover:text-[#D8B45A] transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with Summary and WhatsApp Action */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#D8B45A]/20 bg-[#1C1916] space-y-3.5">
              {/* Optional Name & Notes */}
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Your Name (optional)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-2xl border border-[#D8B45A]/25 bg-[#141311] text-[#F4EBDD] placeholder:text-[#F4EBDD]/35 focus:border-[#D8B45A] focus:ring-1 focus:ring-[#D8B45A] outline-none"
                />
                <input
                  type="text"
                  placeholder="Notes (e.g., extra spicy, pickup time, etc.)"
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-2xl border border-[#D8B45A]/25 bg-[#141311] text-[#F4EBDD] placeholder:text-[#F4EBDD]/35 focus:border-[#D8B45A] focus:ring-1 focus:ring-[#D8B45A] outline-none"
                />
              </div>

              {/* Total Calculation */}
              <div className="flex items-center justify-between text-[#F4EBDD] pt-1">
                <span className="text-xs uppercase font-bold tracking-widest text-[#A88945]">Estimated Total:</span>
                <span className="text-2xl font-black text-[#D8B45A] font-display">₹{totalAmount}</span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={handleSendOrder}
                  className="w-full py-3.5 px-4 rounded-full font-bold uppercase tracking-widest text-xs text-[#141311] bg-[#D8B45A] hover:bg-[#C9A44B] hover:shadow-[0_0_20px_rgba(216,180,90,0.35)] shadow-md flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#141311]" />
                  <span>Send Order to WhatsApp</span>
                </button>

                <div className="flex items-center justify-between pt-1 text-[10px] uppercase tracking-wider text-[#F4EBDD]/50 font-bold">
                  <button
                    onClick={onClearCart}
                    className="text-[#F4EBDD]/50 hover:text-[#D8B45A] underline cursor-pointer"
                  >
                    Clear Tray
                  </button>
                  <span>Pay at pickup / dine-in</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
