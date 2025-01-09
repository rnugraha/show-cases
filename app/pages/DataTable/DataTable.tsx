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
    <div className="container w-full mr-auto p-4">
      <div className="mb-4">
        <h1 className="text-lg font-bold">Data table</h1>
        <p className="text-base">
          Simple show case of a data table using{" "}
          <a
            href="https://tanstack.com/table/latest"
            target="_blank"
            className="text-blue-500 font-semibold"
          >
            react-table
          </a>
          .
        </p>
      </div>
      <StudentTable columns={columns} data={data} />
    </div>
  );
}

export default DataTable;
