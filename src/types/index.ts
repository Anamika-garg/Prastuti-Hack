export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  created_at: string;
}

export interface FoodItem {
  id: string;
  user_id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  expiry_date: string;
  barcode?: string;
  created_at: string;
  updated_at: string;
}

export interface WasteLog {
  id: string;
  user_id: string;
  food_item_id: string;
  quantity: number;
  reason: string;
  created_at: string;
}