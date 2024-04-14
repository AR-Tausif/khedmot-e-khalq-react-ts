import { z } from "zod";

const UserRole = z.enum([
  "super-admin",
  "khuddam",
  "qayed",
  "sadar",
  "k-khalq",
]);

const RegisterUserZodSchema = z.object({
  username: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
  address: z.object({
    majlish: z.string(),
  }),
  email: z.string().email(), // Assuming email format validation
  role: UserRole,
});

export default RegisterUserZodSchema;
