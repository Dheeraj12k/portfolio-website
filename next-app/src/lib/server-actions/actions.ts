"use server";

type State = {
  errors?: {
    email?: string[];
  };
  message?: string | null;
};

export async function createSubscriber(prevState: State, formData: FormData) {
  // Newsletter sign-ups are paused while the blog is disabled.
  // Keeping the handler so the component can call into it without errors.
  return {
    message: "Newsletter sign-ups will be available soon.",
  };
}

/*
// Original implementation kept for reference when the newsletter returns.
// import { db } from "@/db";
// import { revalidatePath } from "next/cache";
// import { z } from "zod";
// import { promises as dns } from "dns";
//
// ... previous validation and persistence logic ...
*/
