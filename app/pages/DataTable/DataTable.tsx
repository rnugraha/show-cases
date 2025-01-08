import React, { useEffect } from "react";
import { Student, columns } from "./columns";
import { StudentTable } from "./table";
import { students } from "./students";

// Get dummy data
async function getData(): Promise<Student[]> {
  return students;
}

function DataTable() {
  const [data, setData] = React.useState<Student[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data);
    };

    // Fetch data
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <StudentTable columns={columns} data={data} />
    </div>
  );
}

export default DataTable;
