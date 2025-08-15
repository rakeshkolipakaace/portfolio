import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactMessageSchema } from "@shared/schema";


export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactMessageSchema.parse(req.body);
      
      // In a real implementation, you would send an email here
      // For now, we'll just log the message and return success
      console.log("Contact form submission:", validatedData);
      
      // TODO: Implement email sending with nodemailer
      // Example: await sendEmail(validatedData);
      
      res.json({ 
        success: true, 
        message: "Message received! I'll get back to you soon." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Please check your form data and try again." 
      });
    }
  });

  // Resume download endpoint
    app.get("/api/resume", (req, res) => {
      const filePath = path.resolve('c:/Users/k.Rakesh/OneDrive/Desktop/Shivaram_Resume.pdf');
      res.download(filePath, 'Shivaram_Resume.pdf', (err) => {
        if (err) {
          res.status(500).json({ message: 'Failed to download resume.' });
        }
      });
    });

  const httpServer = createServer(app);
  return httpServer;
}
