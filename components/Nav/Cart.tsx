"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Cart: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger className="relative" title="Your Cart">
        <ShoppingCart className="cursor-pointer" />
        <Badge
          variant="default"
          className="absolute -top-5  px-1.5 py-0.5 bg-orange-600"
        >
          {0}
        </Badge>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your shopping cart</SheetTitle>
          <SheetDescription>
            <div className="space-y-2">Cart items</div>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <div className="w-full py-5 space-y-5">
            <div className="flex justify-between">
              <div className="font-semibold">SubTotal</div>
              <div className="flex gap-1 font-semibold">
                <span> Price</span>
                <span>USD</span>
              </div>
            </div>
            <div className="w-full">
              <Button disabled className="w-full">
                Proceed to checkout
              </Button>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
