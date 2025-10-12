export type Service = {
  name: string;
  laborPrice: number;
  estimatedMaterialCost: number;
  notes: string;
};

export type User = {
  id?: number;
  name?: string;
  email?: string;
  role?: string;
  services?: Service[];
};
