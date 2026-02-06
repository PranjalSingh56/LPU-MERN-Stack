import { ZodError } from "zod";

export const validate = (schema) => (req, res, next) => {
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (err) {
    console.log("ZOD ERROR:", err);
    
    if (err instanceof ZodError) {
      return res.status(400).json({
        message: "Validation failed",
        errors: err.issues, // THIS IS THE KEY
      });
    }

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

//that use s a ZodSchema to validate incoming request body if the data is valid the request proceed to the next controller Otherwise. A proper error response is returned.