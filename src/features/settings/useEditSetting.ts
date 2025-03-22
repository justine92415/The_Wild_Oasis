import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useEditSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isPending: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Setting successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: () => {
      toast.error("Error updating cabin");
    },
  });

  return { isUpdating, updateSetting };
}
