import { LineupCard } from "../Lineup-card/LineupCard";
import styled from "styled-components";

export const Compare = () => {
  const Main = styled.div`
    height: 2130px;
    width:100%;

    & div h1 {
      font-family: SamsungSharpSans;
      font-size: 36px;
      padding: 5%;
    }
    & .selectTag{
        display:flex;
        justify-content:space-around;
    }
    & .dropDown{
        width:20%;
        font-family: SamsungSharpSans;
        font-size: 15px;
        border:transparent;
        border-bottom:1px solid #dddddd;
        height:50px;
    }
    & .modelDropdown{
        -webkit-appearance: none;
    }
    & .dropDown::before{
        height:30px;
        border:1px solid red;
    }
    & .flexDiv {
      display: flex;
      padding-left: 28%;
      padding-right: 5%;
      justify-content: space-between;
    }
    & .comparison{
        background-color:#f7f7f7;
        height:45%;
        width:94%;
        margin:auto;
    }
    & .subComparison{
        display:flex;
        border-top:1px solid #8f8f8f;
    }
    & .subComparison p{
        padding:2% 2% 0% 2%;
        width:25%;
        font-family: samsung400;
        font-size: 13px;
    }
    & .subComparison p:nth-child(1){
        text-align:left;
        font-family: samsung700;
        font-size: 15px;
    }
    & .compareInfo{
        padding-top:1%;
        padding-left:5%;
        text-align:left;
        background-color:white;
        font-family: samsung400;
        font-size: 11px;
        border-bottom:1px solid #dddddd;
        border-top:1px solid #dddddd;
    }
  `;

  return (
    <Main>
      <div>
        <h1>Compare the models</h1>
      </div>
      <div className="selectTag">
          <select name="" className="dropDown modelDropdown" >
            <option value="Model">Model</option>
          </select>
          <select name="" className="dropDown">
              <option value="Galaxy S22 Ultra">Galaxy S22 Ultra</option>
              <option value="Galaxy S20 FE 5G">Galaxy S20 FE 5G</option>
              <option value="Galaxy S21+ 5G">Galaxy S21+ 5G</option>
              <option value="Galaxy S21 Ultra 5G">Galaxy S21 Ultra 5G</option>
              <option value="Galaxy A72">Galaxy A72</option>
              <option value="Galaxy S22 Ultra">Galaxy S22 Ultra</option>
              <option value="Galaxy S22+">Galaxy S22+</option>
              <option value="Galaxy S22">Galaxy S22</option>
          </select>
          <select name="" className="dropDown">
          <option value="Galaxy S22 Ultra">Galaxy S22 Ultra</option>
              <option value="Galaxy S20 FE 5G">Galaxy S20 FE 5G</option>
              <option value="Galaxy S21+ 5G">Galaxy S21+ 5G</option>
              <option value="Galaxy S21 Ultra 5G">Galaxy S21 Ultra 5G</option>
              <option value="Galaxy A72">Galaxy A72</option>
              <option value="Galaxy S22 Ultra">Galaxy S22 Ultra</option>
              <option value="Galaxy S22+">Galaxy S22+</option>
              <option value="Galaxy S22">Galaxy S22</option>
          </select>
          <select name="" className="dropDown">
          <option value="Galaxy S22 Ultra">Galaxy S22 Ultra</option>
              <option value="Galaxy S20 FE 5G">Galaxy S20 FE 5G</option>
              <option value="Galaxy S21+ 5G">Galaxy S21+ 5G</option>
              <option value="Galaxy S21 Ultra 5G">Galaxy S21 Ultra 5G</option>
              <option value="Galaxy A72">Galaxy A72</option>
              <option value="Galaxy S22 Ultra">Galaxy S22 Ultra</option>
              <option value="Galaxy S22+">Galaxy S22+</option>
              <option value="Galaxy S22">Galaxy S22</option>
          </select>
      </div>
      <br />
      <div className="flexDiv">
        <LineupCard />
        <LineupCard />
        <LineupCard />
      </div>
      <br />
      <div className="comparison">
          <div className="subComparison">
              <p>CPU Speed</p>
              <p>2.99GHz, 2.4GHz, 1.7GHz</p>
              <p>2.99GHz, 2.4GHz, 1.7GHz</p>
              <p>2.99GHz, 2.4GHz, 1.7GHz</p>
          </div>
          <div className="subComparison">
              <p>CPU Type</p>
              <p>Octa-Core</p>
              <p>Octa-Core</p>
              <p>Octa-Core</p>
          </div>
          <div className="subComparison">
              <p>Size (Main_Display)</p>
              <p>17.31cm (6.8") full rectangle / 17.25cm (6.8") rounded corners</p>
              <p>16.65cm (6.6") full rectangle / 16.21cm (6.4") rounded corners</p>
              <p>15.39cm (6.1") full rectangle / 14.99cm (5.9") rounded corners</p>
          </div>
          <div className="subComparison">
              <p>Resolution (Main Display)</p>
              <p>3088 x 1440 (Quad HD+)</p>
              <p>2340 x 1080 (FHD+)</p>
              <p>2340 x 1080 (FHD+)</p>
          </div>
          <div className="subComparison">
              <p>RAM_Size (GB)</p>
              <p>12</p>
              <p>8</p>
              <p>8</p>
          </div>
          <div className="subComparison">
              <p>ROM Size (GB)</p>
              <p>256</p>
              <p>128</p>
              <p>128</p>
          </div>
          <div className="subComparison">
              <p>Dimension (HxWxD, mm)</p>
              <p>163.3 x 77.9 x 8.9</p>
              <p>157.4 x 75.8 x 7.6</p>
              <p>146.0 x 70.6 x 7.6</p>
          </div>
          <div className="subComparison">
              <p>Weight (g)</p>
              <p>228</p>
              <p>195</p>
              <p>167</p>
          </div>
          <div className="subComparison">
              <p>Battery Capacity (mAh, Typical)</p>
              <p>5000</p>
              <p>4500</p>
              <p>3700</p>
          </div>
          <div className="subComparison">
              <p>Rear Camera - Resolution (Multiple)</p>
              <p>108.0 MP + 10.0 MP + 12.0 MP + 10.0 MP</p>
              <p>50.0 MP + 10.0 MP + 12.0 MP</p>
              <p>50.0 MP + 10.0 MP + 12.0 MP</p>
          </div>
          <div className="subComparison">
              <p>Infra</p>
              <p>2G GSM, 3G WCDMA, 4G LTE FDD, 4G LTE TDD, 5G Sub6 FDD, 5G Sub6 TDD</p>
              <p>2G GSM, 3G WCDMA, 4G LTE FDD, 4G LTE TDD, 5G Sub6 FDD, 5G Sub6 TDD</p>
              <p>2G GSM, 3G WCDMA, 4G LTE FDD, 4G LTE TDD, 5G Sub6 FDD, 5G Sub6 TDD</p>
          </div>
          <div className="subComparison">
              <p>Rear Camera - F Number (Multiple)</p>
              <p>F1.8 , F4.9 , F2.2 , F2.4</p>
              <p>F1.8 , F2.4 , F2.2</p>
              <p>F1.8 , F2.4 , F2.2</p>
          </div>
          <div className="subComparison">
              <p>Front Camera - Resolution</p>
              <p>40.0 MP</p>
              <p>10.0 MP</p>
              <p>10.0 MP</p>
          </div>
          <div className="subComparison">
              <p>Front Camera - F Number</p>
              <p>F2.2</p>
              <p>F2.2</p>
              <p>F2.2</p>
          </div>
          <br />
          <div className="compareInfo">
              <p>* Image simulated for illustrative purpose. </p>
              <p>** Color and model availability may vary depending on country or carrier.</p>
              <p>*** Galaxy A53 5G is rated as IP67. Based on test conditions for submersion in up to 1 meter of fresh water for up to 30 minutes. Safe against low water pressure only.</p>
              <p>* S Pen embedded only in Galaxy S22 Ultra.</p>
              <p>* S Pen included with Tab S8 series. Samsung Galaxy Watch4 Classic & Buds Pro sold seperately. Color availability vary by country.</p>
              <p>* Image simulated. Color availability may vary depending on country or carrier.</p>
              <p>* Image of Galaxy Z Fold3 5G, Galaxy Z Flip3 5G and S Pen Fold Edition simulated for illustration purposes.</p>
              <p>* S pen Fold Edition sold separately and is only compatible with Galaxy Z Fold3 5G.</p>
              <p>*5G Devices are 5G ready, connectivity dependent on network availability.</p>
          </div>
      </div>
    </Main>
  );
};
