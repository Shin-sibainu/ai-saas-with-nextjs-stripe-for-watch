import { Database } from "@/utils/supabase/database.types";
import { supabase } from "@/utils/supabase/supabase";
import { handleError } from "../utils";

type CreateUserParams = Database["public"]["Tables"]["users"]["Row"];

export async function createUser(user: CreateUserParams) {
  try {
    const { data: newUser, error } = await supabase
      .from("users")
      .insert(user)
      .select()
      .single();

    if (error) throw error;

    return newUser as CreateUserParams;
  } catch (error) {
    handleError(error);
  }
}
