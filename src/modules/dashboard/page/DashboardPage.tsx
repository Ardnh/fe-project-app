import { Fragment } from "react/jsx-runtime";
import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";
import { getCurrentDate } from "../store/dashboardSelectors";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

interface BudgetDistributionProps {
  title: string;
}

const BudgetDistributionBasedOnCategory: React.FC<BudgetDistributionProps> = ({
  title,
}) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: ["Renovations", "Building", "Education", "Etc"],
      datasets: [
        {
          label: title,
          data: [540, 325, 702, 620],
          backgroundColor: [
            "rgba(255, 159, 64, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgb(255, 159, 64)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
          ],
          borderWidth: 1,
        },
      ],
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="">
      <div className="mb-3 font-base text-gray-500">{title}</div>

      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
};

const DashboardPage: React.FC = () => {
  const currentDate = useSelector(getCurrentDate);

  return (
    <Fragment>
      <div
        className="min-h-28rem h-auto"
        style={{ minHeight: "90vh", height: "auto" }}
      >
        <div
          className="h-auto border-round-2xl w-full p-4"
          style={{ backgroundColor: "#30484A" }}
        >
          <div>
            <div className="mb-2 flex flex-wrap justify-content-between align-items-start">
              <div className="text-xl text-gray-200">Good morning, Navia</div>
              <div className="text-base text-gray-200">
                {currentDate}
                <i className="pi pi-clock ml-2 text-base text-gray-200"></i>
              </div>
            </div>
            <div className="text-sm text-gray-200">
              This is a summary of all your project progress
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-content-between align-items-center my-4 text-xl text-md">
          <div className="">Overview</div>
          <NavLink
            end
            to="/dashboard/project"
            className="border-round-xl font-base cursor-pointer font-base no-underline text-gray-500"
          >
            <div className="flex py-3 px-3 border-round-xl flex-wrap justify-content-start align-items-center text-base hover:bg-gray-200">
              <div className="text-sm">Explore projects</div>
              <i className="pi pi-arrow-right ml-2 text-sm text-gray-500"></i>
            </div>
          </NavLink>
        </div>

        <div className="grid gap-0">
          <div className="col">
            <div className="w-full h-10rem bg-gray-100 border-round-2xl p-4 flex flex-column flex-wrap justify-content-between">
              <div className="flex align-items-center justify-content-start flex-wrap font-base text-gray-500">
                <i
                  className="pi pi-clipboard mr-2 text-lg"
                  style={{ color: "#619194" }}
                ></i>
                Total projects
              </div>
              <div className="text-6xl font-semibold text-gray-500">20</div>
            </div>
          </div>
          <div className="col">
            <div className="w-full h-10rem bg-gray-100 border-round-2xl p-4 flex flex-column flex-wrap justify-content-between">
              <div className="flex align-items-center justify-content-start flex-wrap font-base text-gray-500">
                <i
                  className="pi pi-check mr-2 text-lg"
                  style={{ color: "#619194" }}
                ></i>
                project completed
              </div>
              <div className="text-6xl font-semibold text-gray-500">17</div>
            </div>
          </div>
          <div className="col">
            <div className="w-full h-10rem bg-gray-100 border-round-2xl p-4 flex flex-column flex-wrap justify-content-between">
              <div className="flex align-items-center justify-content-start flex-wrap font-base text-gray-500">
                <i
                  className="pi pi-spinner mr-2 text-lg"
                  style={{ color: "#619194" }}
                ></i>
                Ongoing
              </div>
              <div className="text-6xl font-semibold text-gray-500">3</div>
            </div>
          </div>
          <div className="col">
            <div className="w-full h-10rem bg-gray-100 border-round-2xl p-4 flex flex-column flex-wrap justify-content-between">
              <div className="flex align-items-center justify-content-start flex-wrap font-base text-gray-500">
                <i
                  className="pi pi-asterisk mr-2 text-lg"
                  style={{ color: "#619194" }}
                ></i>
                Total Category
              </div>
              <div className="text-6xl font-semibold text-gray-500">12</div>
            </div>
          </div>
        </div>

        <div className="grid mt-1">
          <div className="col">
            <div className="p-4 border-round-2xl bg-gray-100">
              <BudgetDistributionBasedOnCategory title="Item distribution based on category" />
            </div>
          </div>
          <div className="col">
            <div className="p-4 border-round-2xl bg-gray-100">
              <BudgetDistributionBasedOnCategory title="Budget distribution based on category" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardPage;
