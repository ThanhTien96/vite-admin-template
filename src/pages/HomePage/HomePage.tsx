import { ColumnChart, PieChart, TinyChart } from "./partials";

const HomePage: React.FC = () => {
  return (
    <div className="h-[100px]">
      <h1>klfjlas</h1>

      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <TinyChart />
        </div>
        <div className="col-span-8">
          <ColumnChart />
        </div>
      </div>
      <PieChart />
    </div>
  );
};

export default HomePage;
