import { useState } from "react";
import { useNavigate } from "react-router-dom";  
import {
  AnalyticalTable,
  Card,
  CardHeader,
  CustomListItem,
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  Icon, 
  List,
  ProgressIndicator,
  StandardListItem,
  Text,
  ValueState,
} from "@ui5/webcomponents-react";
import { spacing, ThemingParameters } from "@ui5/webcomponents-react-base";
// import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
// import lineChartIcon from "@ui5/webcomponents-icons/dist/line-chart.js";
// import barChartIcon from "@ui5/webcomponents-icons/dist/horizontal-bar-chart.js";
import listIcon from "@ui5/webcomponents-icons/dist/list.js";
import tableViewIcon from "@ui5/webcomponents-icons/dist/table-view.js";

import { MyCustomElement } from "./MyCustomElement";


const dataset = [
  {
    month: "January",
    data: 65,
  },
  {
    month: "February",
    data: 59,
  },
  {
    month: "March",
    data: 80,
  },
  {
    month: "April",
    data: 81,
  },
  {
    month: "May",
    data: 56,
  },
  {
    month: "June",
    data: 55,
  },
  {
    month: "July",
    data: 40,
  },
];

const tableData = new Array(500).fill(null).map((_, index) => {
  return {
    name: `name${index}`,
    age: Math.floor(Math.random() * 100),
    friend: {
      name: `friend.Name${index}`,
      age: Math.floor(Math.random() * 100),
    },
  };
});

const tableColumns = [
  {
    Header: "Name",
    accessor: "name", // String-based value accessors!
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Friend Name",
    accessor: "friend.name",
  },
  {
    Header: "Friend Age",
    accessor: "friend.age",
  },
];

export function Home() {
    const [toggleCharts, setToggleCharts] = useState("lineChart");
    const [loading, setLoading] = useState(false);
  
    // Crear el hook de navegación
    const navigate = useNavigate();
  
    // Función que maneja el click en el encabezado del primer Card
    const handleProgressHeaderClick = () => {
      navigate("/detail");  // Redirige a la ruta /detail
    };
  
    return (
      <>
        <FlexBox
          justifyContent={FlexBoxJustifyContent.Center}
          wrap={FlexBoxWrap.Wrap}
          style={spacing.sapUiContentPadding} 
        >
          <MyCustomElement />
          <Card
            header={
              <CardHeader
                titleText="Progress"
                subtitleText="List"
                avatar={<Icon name={listIcon} />}
                interactive
                onClick={handleProgressHeaderClick}  // Agregar onClick
              />
            }
            style={{ width: "300px", ...spacing.sapUiContentPadding }}
          >
            <List>
              <StandardListItem
                additionalText="finished"
                additionalTextState={ValueState.Success}
              >
                Activity 1
              </StandardListItem>
              <StandardListItem
                additionalText="failed"
                additionalTextState={ValueState.Error}
              >
                Activity 2
              </StandardListItem>
              <CustomListItem>
                <FlexBox
                  direction={FlexBoxDirection.Column}
                  style={{ width: "100%", ...spacing.sapUiSmallMarginTopBottom }}
                >
                  <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
                    <Text style={{ fontSize: ThemingParameters.sapFontLargeSize }}>
                      Activity 3
                    </Text>
                    <Text style={{ color: ThemingParameters.sapCriticalTextColor }}>
                      in progress
                    </Text>
                  </FlexBox>
                  <ProgressIndicator
                    value={89}
                    valueState={ValueState.Success}
                    style={{ ...spacing.sapUiTinyMarginTop }}
                  />
                </FlexBox>
              </CustomListItem>
              <CustomListItem>
                <FlexBox
                  direction={FlexBoxDirection.Column}
                  style={{ width: "100%", ...spacing.sapUiSmallMarginTopBottom }}
                >
                  <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
                    <Text style={{ fontSize: ThemingParameters.sapFontLargeSize }}>
                      Activity 4
                    </Text>
                    <Text style={{ color: ThemingParameters.sapCriticalTextColor }}>
                      in progress
                    </Text>
                  </FlexBox>
                  <ProgressIndicator
                    value={5}
                    valueState={ValueState.Error}
                    style={{ ...spacing.sapUiTinyMarginTop }}
                  />
                </FlexBox>
              </CustomListItem>
            </List>
          </Card>
          <Card
            header={
              <CardHeader
                titleText="AnalyticalTable"
                avatar={<Icon name={tableViewIcon} />}
              />
            }
            style={{ maxWidth: "900px", ...spacing.sapUiContentPadding }}
          >
            <AnalyticalTable data={tableData} columns={tableColumns} visibleRows={5} />
          </Card>
        </FlexBox>
      </>
    );
  }
  