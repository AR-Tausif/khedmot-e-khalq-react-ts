import { z } from "zod";

const LoginUserZodSchema = z.object({
  email: z.string().email(), // Assuming email format validation
  password: z.string(),
});

export default LoginUserZodSchema;
