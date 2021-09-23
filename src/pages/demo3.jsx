import React from "react";
import { Row, Col, Typography, Button, Checkbox, Empty, Avatar } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Select  from 'react-select';
import { getProducts } from "../redux/Actions/productAction";
import { getDocuments, getResult } from "../redux/Actions/documentActions";
import BaseTable from "../components/BaseTable";
import { useState } from "react";
import Search from "../components/Search";
import { components } from "react-select";



const { Title } = Typography;

const columns = [
  {
    title: "",
    dataIndex: "avatar",
    width: "5%",
  },
  {
    title: "Titel",
    dataIndex: "name",
    sorter: {
      compare: (a, b) => a.orderNumber - b.orderNumber,
      multiple: 1,
    },
  },
  {
    title: "Stand",
    dataIndex: "date",
    sorter: {
      compare: (a, b) => a.date - b.date,
      multiple: 1,
    },
  },
  {
    title: "Bestellnummer",
    dataIndex: "orderNumber",
    sorter: {
      compare: (a, b) => a.orderNumber - b.orderNumber,
      multiple: 1,
    },
  },
  {
    title: "Herunterladen",
    dataIndex: "download",
    width: "10%",
    
  },
];


const Demo3 = () => {
  const fields = useSelector((state) => state.themeFields.fields);
  const products = useSelector((state) => state.products.currentProducts);
  const documents = useSelector((state) => state.documents.currentDocuments);
  const resultDocs = useSelector((state) => state.documents.result);
  const filteredDocuments = useSelector(
    (state) => state.documents.filteredDocuments
  );

  const [showSearch, setShowSearch] = useState(false);
  const dispatch = useDispatch();

  const onChangeField = (checkedValues) => {
    dispatch(getProducts(checkedValues));
  };
  const onChangeProduct = (checkedValues) => {
    dispatch(getDocuments(checkedValues));
  };
  const onChangeDocument = (checkedValues) => {
    dispatch(getResult(checkedValues));
  };



    return (
    <div>
    {/*<span style={indicatorSeparatorStyle} {...fields.map((field) => (
      key={field.id}>
      onChange={() => onChangeField(field.value)}
      >
      {field.name} />;
      </span>*/}
        <Row >
        <Col span={16} offset={4}>
          {resultDocs && <Search setShowSearch={setShowSearch} />}
          <BaseTable
            columns={columns}
            data={showSearch ? filteredDocuments : resultDocs}
            rowKey="key"
          />
        </Col>
      </Row>
      </div>
    )
};

export default Demo3;