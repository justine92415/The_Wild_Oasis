import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "./apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,

    onSuccess: (user) => {
      console.log("User signed up", user);
      toast.success("Signed up successfully");
    },
    onError: (error) => {},
  });

  return { signup, isPending };
}
