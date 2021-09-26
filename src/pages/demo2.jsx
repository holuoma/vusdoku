import React from "react";
import { Row, Col, Typography, Button, Checkbox, Empty, Avatar, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/Actions/productAction";
import { getDocuments, getResult } from "../redux/Actions/documentActions";
import BaseTable from "../components/BaseTable";
import { useState } from "react";
import Search from "../components/Search";
import SimpleBar from "simplebar-react";
import "simplebar/src/simplebar.css";
import factCheck from ".//factCheck.svg";
import apps from ".//apps.svg";
import description from ".//description.svg";



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
    width: '70%',
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
      <Row style={{margin:"20px 0px", width: "100%", justifyContent: "center"}}>
        <Col xs={24} xl={16}>
          <Row style={{justifyContent: "center"}}>
            <Col className="col-span" span={7}  style={{marginRight: "5px"}}>
              <Row classname="rowtopic" style={{marginRight: "5px", display: "flex"}}>
                <Col span={24} style={{display: "flex"}}>
                  <span>
                  <img src={factCheck} alt="themenfeld" className="fatcheck" style={{width: "2rem"}} />
                  </span>
                  <Title className="topic-label" style={{marginLeft: "1rem"}} level={3}>Themenfeld</Title>
                </Col>
              </Row>
              <SimpleBar className="simplebar-tag"
                style={{
                  height:"200px",
                  maxHeight: 200,
                  padding: "10px 0px 5px 20px",
                  border: "1px solid #ddd",
                  borderRadius: "10px 0 0 10px"
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

            <Col className="col-span" span={7} style={{marginRight: "5px"}}>
              <Row className="rowtopic">
                <Col span={24} style={{display: "flex"}}>
                <span>
                  <img src={apps} alt="produkt" className="apps" style={{width: "2rem"}} />
                  </span>
                  <Title style={{marginLeft: "1rem"}} level={3}>Produkt</Title>
                </Col>
              </Row>
              <SimpleBar
                style={{
                  height:"200px",
                  maxHeight: 200,
                  padding: "10px 0px 5px 20px",
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

            <Col className="col-span" span={7}>
              <Row className="rowtopic">
                <Col span={24} style={{display: "flex"}}>
                  <span>
                  <img src={description} alt="dokumententyp" className="description" style={{width: "2rem"}} />
                  </span>
                  <Title style={{marginLeft: "1rem", fontColor: "#22366F"}} level={3}>Dokumententyp</Title>
                </Col>
              </Row>
              <SimpleBar
                style={{
                  height:"200px",
                  maxHeight: 200,
                  padding: "10px 0px 5px 20px",
                  border: "1px solid #ddd",
                  borderRadius: "0 10px 10px 0px"
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
      <Row style={{margin:"20px 0px", width: "100%", justifyContent: "center"}}>
        <Col xs={21} xl={16}>
          {resultDocs && <Search setShowSearch={setShowSearch}/>}
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
