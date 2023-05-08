import FeatureInfo from "../../components/featureInfo/FeatureInfo"
import Chart from "../../components/chart/Chart"
import "./home.css"
import { userData } from "../../dummyData"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import WidgetLg from "../../components/widgetLg/WidgetLg"

export default function Home() {
  return (
    <div className='home'>
      <FeatureInfo />
      <Chart data={userData} title="User Analytics" dataKey="Active User" grid />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
