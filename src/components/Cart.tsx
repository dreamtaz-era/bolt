import React from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { state, dispatch } = useCart();
  const total = state.items.reduce(
    (sum, item) => sum + parseFloat(item.price.replace('€', '')) * item.quantity,
    0
  );

  return (
    <>
      {state.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-lg font-serif">Votre Panier</h2>
              <button
                onClick={() => dispatch({ type: 'TOGGLE_CART' })}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6 overflow-auto h-[calc(100vh-200px)]">
              {state.items.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingBag className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500">Votre panier est vide</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-24 w-24 object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-serif">{item.name}</h3>
                        <p className="text-accent">{item.price}</p>
                        <p className="text-sm text-gray-500">Quantité: {item.quantity}</p>
                      </div>
                      <button
                        onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Total</span>
                <span className="font-serif">€{total.toFixed(2)}</span>
              </div>
              <button className="btn-primary w-full">
                Passer la commande
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}