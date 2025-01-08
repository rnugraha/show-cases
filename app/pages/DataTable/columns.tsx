import { ColumnDef } from "@tanstack/react-table";

export type Student = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  tshirt_size: string;
  race: string;
};

export const columns: ColumnDef<Student>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "First Name",
    accessorKey: "first_name",
  },
  {
    header: "Last Name",
    accessorKey: "last_name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Gender",
    accessorKey: "gender",
  },
  {
    header: "T-Shirt",
    accessorKey: "tshirt_size",
  },
  {
    header: "Race",
    accessorKey: "race",
  },
];
