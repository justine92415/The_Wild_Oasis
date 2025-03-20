import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginApi({ email, password }),
    onSuccess: (user) => {
      console.log("User logged in", user);
      navigate("/dashboard");
    },
    onError: (error) => {
      console.error(error);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isPending };
}
