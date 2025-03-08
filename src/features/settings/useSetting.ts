import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";
import { Setting } from "../../types";

export function useSetting() {
  const { isLoading, error, data: settings } = useQuery<Setting>({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return  { isLoading, error, settings };
}
