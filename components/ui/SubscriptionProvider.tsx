"use client";

import { subscriptionRef } from "@/lib/converters/Subscription";
import { useSubscriptionStore } from "@/store/store";
import { error } from "console";
import { refFromURL } from "firebase/database";
import { onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { Children, useEffect } from "react";

function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const setSubscription = useSubscriptionStore(
    (state) => state.setSubscription
  );

  useEffect(() => {
    if (!session) return;

    return onSnapshot(
      subscriptionRef(session?.user.id),
      (snapshot) => {
        if (snapshot.empty) {
          console.log("User has no subscription. '_' ");
          //set no subscription
          setSubscription(null);
          return;
        } else {
          console.log("User has subscription!");
          //set Subscription
          setSubscription(snapshot.docs[0].data());
        }
      },
      (error) => {
        console.error("Error getting the document:", error);
      }
    );
  }, [session, setSubscription]);
  return <div>{children}</div>;
}

export default SubscriptionProvider;
