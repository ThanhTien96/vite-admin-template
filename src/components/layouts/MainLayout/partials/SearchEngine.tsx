import { Input } from "antd";
const { Search } = Input;

type SearchEngineProps = {
  onSearch: (value: string) => void;
};

const SearchEngine = (props: SearchEngineProps) => {
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
