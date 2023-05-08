import "./featureInfo.css"
import { 
    ArrowDownward,
    ArrowUpward
 } from "@mui/icons-material"

export default function FeatureInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featureTitle">Revanue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">
                -11.4 <ArrowDownward className="featuredIcon negative" />
            </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featureTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4,415</span>
            <span className="featuredMoneyRate">
                +2.4 <ArrowDownward className="featuredIcon negative" />
            </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featureTitle">Cost</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,225</span>
            <span className="featuredMoneyRate">
                +2.4 <ArrowUpward className="featuredIcon" />
            </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}
