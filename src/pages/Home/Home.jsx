import img from "../../assets/img/div.MuiStack-root (1).png";
import img1 from "../../assets/img/div.MuiStack-root (2).png";
import img2 from "../../assets/img/div.MuiStack-root.png";
import img3 from "../../assets/img/div.MuiBox-root.png";
import Chart from "react-apexcharts";
const chartOptions = {
  chart: {
    id: 'sales-revenue'
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  }
};

const chartSeries = [
  {
    name: 'Orders',
    data: [1, 41, 35, 30, 49, 62, 69, 91, 120, 6, 56, 42 , 100 , 160]
  }
];
 
import { useTranslation } from "react-i18next";
 
 
const Home = () => {
  const { t, i18n} = useTranslation()
  return (
    <div className="p-[28px] flex flex-col gap-[40px] sm:gap-[24px] sm:w-[400px]">
      <h1 className="text-[#111927] text-[24px] font-[700] sm:text-[20px]">Dashboard</h1>
      <div className="flex items-start gap-[16px] md:flex-wrap">
        <div className="flex flex-col md:flex-wrap gap-[16px]">
          <div className="flex items-start gap-[12px] md:flex-wrap">
            <img className="sm:w-[150px]" src={img2} alt="" />
            <img className="sm:w-[150px]" src={img} alt="" />
            <img className="sm:w-[150px]" src={img1} alt="" />
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 mb-4 w-full  " >
    <h2 className="text-2xl font-bold mb-4 dark:text-white">{t("home.Revenue")}</h2>
    <Chart options={chartOptions} series={chartSeries} className="w-full" type="line" height={320} />
  </div>
        </div>
        <div className="flex md:w-full flex-col gap-4 p-4 items-center bg-white dark:bg-gray-800 rounded-lg shadow  w-[32%] min-h-[320px]" >
    <div className="flex justify-between gap-4 items-center w-full">
      <h1 className="text-gray-900 dark:text-white text-lg font-semibold">{t("home.cell")}</h1>
      <h1 className="text-gray-900 dark:text-white text-sm font-semibold">{t("home.see")}</h1>
    </div>
    <div className="flex flex-col gap-4 w-full">
      {Array(5).fill().map((_, index) => (
        <div key={index} className="flex items-center gap-4 w-full">
          <img src={img3} alt="Product" className="w-16 h-16 object-cover rounded" />
          <div className="flex flex-col gap-1 flex-1">
            <h1 className="text-gray-900 dark:text-white text-base font-medium">Healthcare Erbology</h1>
            <h1 className="text-gray-500 dark:text-gray-400 text-sm">Accessories</h1>
          </div>
          <div className="flex flex-col items-end">
            <h1 className="text-green-500 dark:text-green-400 text-base font-medium">13,153</h1>
            <h1 className="text-gray-500 dark:text-gray-400 text-sm">in sales</h1>
          </div>
        </div>
      ))}
    </div>
  </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">{t("home.recent_transactions")}</h2>
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b dark:text-gray-300">{t("home.name")}</th>
              <th className="py-2 px-4 border-b dark:text-gray-300">{t("home.date")}</th>
              <th className="py-2 px-4 border-b dark:text-gray-300">{t("home.amount")}</th>
              <th className="py-2 px-4 border-b dark:text-gray-300">{t("home.status")}</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            <tr>
              <td className="py-2 px-4 border-b dark:text-white">Jagarnath S.</td>
              <td className="py-2 px-4 border-b dark:text-white">24.05.2023</td>
              <td className="py-2 px-4 border-b dark:text-white">$124.97</td>
              <td className="py-2 px-4 border-b text-green-500 dark:text-green-400">Paid</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b dark:text-white">Anand G.</td>
              <td className="py-2 px-4 border-b dark:text-white">23.05.2023</td>
              <td className="py-2 px-4 border-b dark:text-white">$55.42</td>
              <td className="py-2 px-4 border-b text-yellow-500 dark:text-yellow-400">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">{t('home.top_products_by_units_sold')}</h2>
        <table className="min-w-full text-center bg-white dark:bg-gray-800">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b dark:text-gray-300">{t('home.name')}</th>
              <th className="py-2 px-4 border-b dark:text-gray-300">{t('home.price')}</th>
              <th className="py-2 px-4 border-b dark:text-gray-300">{t('home.units')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b dark:text-white">Men Grey Hoodie</td>
              <td className="py-2 px-4 border-b dark:text-white">$49.90</td>
              <td className="py-2 px-4 border-b dark:text-white">204</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b dark:text-white">Women Striped T-Shirt</td>
              <td className="py-2 px-4 border-b dark:text-white">$34.90</td>
              <td className="py-2 px-4 border-b dark:text-white">150</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Home;
