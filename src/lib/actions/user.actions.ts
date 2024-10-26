import { Database } from "@/utils/supabase/database.types";
import { handleError } from "../utils";
import { createClient } from "@/utils/supabase/supabase";

type CreateUserParams = Database["public"]["Tables"]["users"]["Row"];

export async function createUser(user: CreateUserParams) {
  const supabase = createClient();

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
