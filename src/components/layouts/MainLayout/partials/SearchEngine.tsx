import { Input } from "antd";
import React from "react";
const { Search } = Input;

type SearchEngineProps = {
  onSearch: (value: string) => void;
};

const SearchEngine: React.FC<SearchEngineProps> = (props) => {


  return (
    <div className="flex items-center justify-center">
      <Search
        placeholder="input search text"
        allowClear
        {...props}
        style={{ width: 400 }}
      />
    </div>
  );
};

export default SearchEngine;
