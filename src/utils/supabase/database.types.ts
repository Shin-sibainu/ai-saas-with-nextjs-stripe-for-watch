export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      images: {
        Row: {
          aspectRatio: string | null;
          author: string | null;
          color: string | null;
          config: Json | null;
          created_at: string;
          height: number | null;
          id: string;
          prompt: string | null;
          publicId: string;
          secureURL: string;
          title: string;
          transformationType: string;
          transformationUrl: string | null;
          updated_at: string | null;
          width: number | null;
        };
        Insert: {
          aspectRatio?: string | null;
          author?: string | null;
          color?: string | null;
          config?: Json | null;
          created_at?: string;
          height?: number | null;
          id?: string;
          prompt?: string | null;
          publicId: string;
          secureURL: string;
          title: string;
          transformationType: string;
          transformationUrl?: string | null;
          updated_at?: string | null;
          width?: number | null;
        };
        Update: {
          aspectRatio?: string | null;
          author?: string | null;
          color?: string | null;
          config?: Json | null;
          created_at?: string;
          height?: number | null;
          id?: string;
          prompt?: string | null;
          publicId?: string;
          secureURL?: string;
          title?: string;
          transformationType?: string;
          transformationUrl?: string | null;
          updated_at?: string | null;
          width?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "images_author_fkey";
            columns: ["author"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      transactions: {
        Row: {
          amount: number;
          buyer: string | null;
          created_at: string;
          credits: number | null;
          id: string;
          plan: string | null;
          stripeId: string;
        };
        Insert: {
          amount: number;
          buyer?: string | null;
          created_at?: string;
          credits?: number | null;
          id?: string;
          plan?: string | null;
          stripeId: string;
        };
        Update: {
          amount?: number;
          buyer?: string | null;
          created_at?: string;
          credits?: number | null;
          id?: string;
          plan?: string | null;
          stripeId?: string;
        };
        Relationships: [
          {
            foreignKeyName: "transactions_buyer_fkey";
            columns: ["buyer"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      users: {
        Row: {
          clerkId: string;
          created_at: string;
          creditBalance: number | null;
          email: string;
          firstName: string | null;
          id: string;
          lastName: string | null;
          photo: string;
          planId: number | null;
          username: string;
        };
        Insert: {
          clerkId: string;
          created_at?: string;
          creditBalance?: number | null;
          email: string;
          firstName?: string | null;
          id?: string;
          lastName?: string | null;
          photo: string;
          planId?: number | null;
          username: string;
        };
        Update: {
          clerkId?: string;
          created_at?: string;
          creditBalance?: number | null;
          email?: string;
          firstName?: string | null;
          id?: string;
          lastName?: string | null;
          photo?: string;
          planId?: number | null;
          username?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
  ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;
