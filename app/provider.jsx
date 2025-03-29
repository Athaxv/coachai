"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import AuthProvider from "./AuthProvider";
import { Suspense } from "react";

function Provider({ children }) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  return (
    <Suspense fallback={<p>Loading...</p>}>
    <ConvexProvider client={convex}>
        <AuthProvider>
        {children}
        </AuthProvider>
        </ConvexProvider>
        </Suspense>
  )
}

export default Provider