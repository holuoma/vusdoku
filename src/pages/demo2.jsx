import React from "react";
import { Row, Col, Typography, Button, Checkbox, Empty, Avatar } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/Actions/productAction";
import { getDocuments, getResult } from "../redux/Actions/documentActions";
import BaseTable from "../components/BaseTable";
import { useState } from "react";
import Search from "../components/Search";
import SimpleBar from "simplebar-react";
import "simplebar/src/simplebar.css";
//import factCheck from "../components/svg/fatCheck.svg";

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

const Demo2 = () => {
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
    <>
      <Row style={{margin:"20px 0px"}}>
        <Col span={16} offset={4}>
          <Row>
            <Col className="col-span" span={8}>
              <Row classname="rowtopic">
                <Col span={24}>
                  <Title level={3}>Themenfeld</Title>
                </Col>
              </Row>
              <SimpleBar className="simplebar-tag"
                style={{
                  height:"200px",
                  maxHeight: 200,
                  padding: "20px 0px 5px 20px",
                  border: "1px solid #ddd",
                }}
              >
                {fields.map((field) => (
                  <Row key={field.id}>
                    <Col span={24}>
                      <Checkbox className="checkbox"
                        // value={product.value}
                        onChange={() => onChangeField(field.value)}
                      >
                        {field.name}
                      </Checkbox>
                    </Col>
                  </Row>
                ))}
              </SimpleBar>
            </Col>
            <Col className="col-span" span={8}>
              <Row className="rowtopic">
                <Col span={24}>
                  <Title level={3}>Produkt</Title>
                </Col>
              </Row>
              <SimpleBar
                style={{
                  height:"200px",
                  maxHeight: 200,
                  padding: "20px 0px 5px 20px",
                  border: "1px solid #ddd",
                }}
              >
                {products.length ? (
                  products.map((product) => (
                    <Row key={product.id}>
                      <Col span={24}>
                        <Checkbox className="checkbox"
                          // value={product.value}
                          onChange={() => onChangeProduct(product.value)}
                        >
                          {product.name}
                        </Checkbox>
                      </Col>
                    </Row>
                  ))
                ) : (
                  <Empty />
                )}
              </SimpleBar>
            </Col>
            <Col className="col-span" span={8}>
              <Row className="rowtopic">
                <Col span={24}>
                  <Title level={3}>Dokumententyp</Title>
                </Col>
              </Row>
              <SimpleBar
                style={{
                  height:"200px",
                  maxHeight: 200,
                  padding: "20px 0px 5px 20px",
                  border: "1px solid #ddd",
                }}
              >
                {documents.length ? (
                  documents.map((document) => (
                    <Row key={document.id}>
                      <Col span={24}>
                        <Checkbox classname="checkbox"
                          // value={document.value}
                          onChange={() => onChangeDocument(document.value)}
                        >
                          {document.name}
                        </Checkbox>
                      </Col>
                    </Row>
                  ))
                ) : (
                  <Empty />
                )}
              </SimpleBar>
            </Col>
          </Row>
        </Col>
      </Row>
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
    </>
  );
};

export default Demo2;
