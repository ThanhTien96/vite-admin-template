import { Input } from "antd";
import React from "react";
const { Search } = Input;

type SearchEngineProps = {};

const SearchEngine: React.FC<SearchEngineProps> = () => {
  const onSearch = (value: string) => console.log(value);

  return (
    <div className="flex items-center justify-center">
      <Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{ width: 400 }}
      />
    </div>
  );
};

export default SearchEngine;
