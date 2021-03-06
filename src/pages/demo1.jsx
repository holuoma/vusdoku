import React, {useState} from "react";
import { Collapse, Row, Col, Checkbox, Typography, Button, Empty } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/Actions/productAction";
import { getDocuments, getResult } from "../redux/Actions/documentActions";
import BaseTable from "../components/BaseTable";
import Search from "../components/Search";

const { Panel } = Collapse;
const { Title } = Typography;

const columns = [
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
];
const Demo1 = () => {
  const fields = useSelector((state) => state.themeFields.fields);
  const products = useSelector((state) => state.products.currentProducts);
  const documents = useSelector((state) => state.documents.currentDocuments);
  const resultDocs = useSelector((state) => state.documents.result);
  const filteredDocuments = useSelector(
    (state) => state.documents.filteredDocuments
  );

  const [showSearch, setShowSearch] = useState(false);
  const dispatch = useDispatch();

  function onChange(checkedValues) {
    dispatch(getDocuments(checkedValues));
  }

  return (
    <>
      <Row>
        <Col span={14} offset={5}>
          <Collapse defaultActiveKey={["1"]}>
            <Panel header={`Themenfeld`} key={1}>
              <Row gutter={16}>
                {fields.map((field) => (
                  <Col className="gutter-row" span={4} key={field.id}>
                    <Button
                      type="primary"
                      onClick={() => dispatch(getProducts(field.value))}
                    >
                      {field.name}
                    </Button>
                    {/* <div style={style}>col-6</div> */}
                  </Col>
                ))}
              </Row>
            </Panel>
            <Panel header={`Produkt`} key={2}>
              {products.length ? (
                products.map((product) => (
                  <Row key={product.id}>
                    <Col span={8}>
                      <Checkbox
                        // value={product.value}
                        onChange={() => onChange(product.value)}
                      >
                        {product.name}
                      </Checkbox>
                    </Col>
                  </Row>
                ))
              ) : (
                <Empty />
              )}
            </Panel>
            <Panel header={`Documententyp`} key={3}>
              <Row gutter={16}>
                {documents.length ? (
                  documents.map((document) => (
                    <Col className="gutter-row" span={4} key={document.id}>
                      <Button
                        type="primary"
                        onClick={() => dispatch(getResult(document.value))}
                      >
                        {document.name}
                      </Button>
                    </Col>
                  ))
                ) : (
                  <Empty />
                )}
              </Row>
            </Panel>
            <Panel header={`Dokumenten`} key={4}>
              {resultDocs && (
                <Search setShowSearch={setShowSearch} />
              )}
              <BaseTable
                columns={columns}
                data={showSearch ? filteredDocuments : resultDocs}
                rowKey="key"
              />
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </>
  );
};

export default Demo1;
