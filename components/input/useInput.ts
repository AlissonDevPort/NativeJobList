import { useState } from "react";

const useInput = (
  initialValue: string,
  onSearch: (value: string) => void,
  arr: any[],
  setArr: React.Dispatch<React.SetStateAction<any[]>>
) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    onSearch(newValue);
  };

  const handleSearch = (term: string) => {
    const filtered = arr.filter((employee) => {
      const lowerCas = term.toLowerCase();
      return (
        employee.name.toLowerCase().includes(lowerCas) ||
        employee.job.toLowerCase().includes(lowerCas) ||
        employee.phone.includes(lowerCas)
      );
    });
    setArr(filtered);
  };

  return {
    value,
    onChange: handleChange,
    handleSearch,
  };
};

export default useInput;
