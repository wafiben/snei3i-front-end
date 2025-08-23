
export type Service = {
  name: string;
  laborPrice: number;
  estimatedMaterialCost: number;
  notes: string;
};

export type User = {
  id?: number; // your JSON has a number, not string
  name: string;
  email: string;
  role: string;
  services?: Service[];
};
