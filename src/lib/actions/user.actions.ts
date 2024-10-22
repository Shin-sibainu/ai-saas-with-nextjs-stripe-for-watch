import { Database } from "@/utils/supabase/database.types";
import { supabase } from "@/utils/supabase/supabase";
import { handleError } from "../utils";

type CreateUserParams = Database["public"]["Tables"]["users"];

export async function createUser(user: CreateUserParams) {
  try {
    const newUser = await supabase.from("users").insert(user);

    return newUser;
  } catch (error) {
    handleError(error);
  }
}
