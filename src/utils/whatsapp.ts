import { CartItem, MenuItem } from '../types';
import { RESTAURANT_INFO } from '../data/menuData';

export const WHATSAPP_NUMBER = '919369722736';
export const DISPLAY_PHONE = '093697 22736';

export function getSingleItemWhatsAppUrl(
  item: MenuItem, 
  size?: 'Small' | 'Medium' | 'Large', 
  extraCheese?: boolean, 
  extraTopping?: boolean,
  currentPrice?: number
): string {
  let details = item.name;
  if (size) {
    details += ` (${size} Size)`;
  }
  const addons: string[] = [];
  if (extraCheese) addons.push('Extra Cheese');
  if (extraTopping) addons.push('Extra Topping');
  if (addons.length > 0) {
    details += ` with ${addons.join(', ')}`;
  }
  const priceText = currentPrice ? ` (₹${currentPrice})` : ` (₹${item.price})`;
  const text = `Hi The Pizza Lover's! I would like to order ${details}${priceText}. Please confirm my order!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getGeneralWhatsAppUrl(customMessage?: string): string {
  const text = customMessage || `Hi The Pizza Lover's! I would like to inquire about ordering delicious vegetarian pizza & fast-food from your Patan café.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getCartWhatsAppUrl(items: CartItem[], total: number, customerName?: string, notes?: string): string {
  let message = `Hi The Pizza Lover's! I would like to place an order:\n\n`;
  if (customerName) {
    message += `Customer: ${customerName}\n`;
  }
  items.forEach((item, index) => {
    let line = `${index + 1}. ${item.name}`;
    if (item.size) {
      line += ` [${item.size}]`;
    }
    const extras: string[] = [];
    if (item.extraCheese) extras.push('+Extra Cheese');
    if (item.extraTopping) extras.push('+Extra Topping');
    if (extras.length > 0) {
      line += ` (${extras.join(', ')})`;
    }
    line += ` x${item.quantity} = ₹${item.price * item.quantity}`;
    message += `${line}\n`;
  });
  message += `\nTotal Amount: ₹${total}\n`;
  if (notes) {
    message += `Special Instructions: ${notes}\n`;
  }
  message += `\nPlease confirm my order and share estimated preparation time. Thank you!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
