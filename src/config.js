import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const MONGO_STRING = process.env.DATABASE_URL