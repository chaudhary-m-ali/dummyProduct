import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Minus, Plus, Trash2 } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "@/redux/cartSlice";

/**
 * @typedef {Object} CartItem
 * @property {string} id
 * @property {string} name
 * @property {number} price
 * @property {number} quantity
 * @property {string} image
 * @property {string} [size]
 * @property {string} [color]
 */

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.items) || [];
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qunatity,
    0,
  );
  const shipping = 1;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="mb-6 sm:mb-8">
        <h1 className="mb-2 text-2xl sm:text-3xl">Shopping Cart</h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          {cartItems.length} items in your cart
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-3 sm:space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex gap-3 sm:gap-4">
                    {/* Product Image */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <ImageWithFallback
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info & Controls */}
                    <div className="flex-1 min-w-0 flex flex-col">
                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm sm:text-base line-clamp-2">
                          {item.title}
                        </h3>
                        <div className="text-muted-foreground text-xs sm:text-sm space-y-0.5 mt-1">
                          {item.size && <p>Size: {item.size}</p>}
                          {item.category && <p>Category: {item.category}</p>}
                          <p className="font-semibold text-foreground text-sm sm:text-base">
                            ${item.price.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      {/* Quantity Controls & Delete - Mobile Layout */}
                      <div className="flex items-center justify-between mt-3 sm:mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-7 h-7 sm:w-8 sm:h-8 p-0"
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  quantity:
                                    item.qunatity > 1 ? item.qunatity - 1 : 1,
                                }),
                              )
                            }
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center text-sm sm:text-base font-medium">
                            {item.qunatity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-7 h-7 sm:w-8 sm:h-8 p-0"
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  quantity: item.qunatity + 1,
                                }),
                              )
                            }
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>

                        {/* Delete Button */}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          onClick={() =>
                            dispatch(removeFromCart({ id: item.id }))
                          }
                        >
                          <Trash2 className="w-4 h-4" />
                          <span className="ml-1 text-xs sm:text-sm">
                            Remove
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-base sm:text-lg">
                Your cart is empty
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                Add items to get started!
              </p>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="mb-4 text-lg sm:text-xl font-semibold">
                Order Summary
              </h3>

              <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6 text-sm sm:text-base">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">
                    ${subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">${shipping}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-medium">${tax}</span>
                </div>
                <div className="border-t pt-2.5 sm:pt-3 mt-2.5 sm:mt-3">
                  <div className="flex justify-between text-base sm:text-lg">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold">${total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                <Input
                  placeholder="Enter promo code"
                  className="text-sm sm:text-base"
                />
                <Button
                  variant="outline"
                  className="w-full text-sm sm:text-base"
                >
                  Apply Code
                </Button>
              </div>

              <Button className="w-full text-sm sm:text-base" size="lg">
                Proceed to Checkout
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
export default Cart;
