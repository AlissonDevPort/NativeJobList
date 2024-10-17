import { useEffect, useState } from "react";
import { getEmployees } from "../../services/employees";
import { Employee } from "../../types/types";


export const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await getEmployees();
        if (response) {
          setEmployees(response);
          setFilteredEmployees(response);
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        } else {
          console.error("Failed to fetch employees");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchEmployees();
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return {
    employees,
    filteredEmployees,
    setFilteredEmployees,
    loading,
    expandedId,
    toggleExpand,
  };
};
