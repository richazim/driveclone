import {z} from "zod";

export const getFormSchema = (type: AuthFormType) => {

    return z.object({
        fullName:
            type === "sign-up"
                ? z
                    .string({
                        message: "Le nom complet doit contenir au moins deux caractères",
                    })
                    .min(2, {
                        message: "Le nom complet doit contenir au moins deux caractères",
                    })
                    .max(50, {
                        message: "Le nom complet ne doit pas dépasser 50 caractères",
                    })
                : z.string({ message: "Au moins deux caracteres" }).optional(),
        email: z.string().email({ message: "L'adresse e-mail est invalide" }),
    });
};