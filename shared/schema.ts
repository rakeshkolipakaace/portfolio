// User schema for storage.ts

export const userSchema = z.object({
  id: z.string(),
  username: z.string().min(2, "Username must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  // Add more fields as needed
});

export const insertUserSchema = userSchema.omit({ id: true });

export type User = z.infer<typeof userSchema>;
export type InsertUser = z.infer<typeof insertUserSchema>;
import { z } from "zod";

export const contactMessageSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export type ContactMessage = z.infer<typeof contactMessageSchema>;
