import React from "react";
import { Row, Col, Typography, Button, Checkbox, Empty, Avatar, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/Actions/productAction";
import { getDocuments, getResult } from "../redux/Actions/documentActions";
import BaseTable from "../components/BaseTable";
import { useState } from "react";
import Search from "../components/Search";
import factCheck from ".//factCheck.svg";
import apps from ".//apps.svg";
import description from ".//description.svg";
import SimpleBar from "simplebar-react";
import "simplebar/src/simplebar.css";


const { Title } = Typography;
const { Option } = Select;

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

const Demo3 = () => {
  const fields = useSelector((state) => state.themeFields.fields);
  const products = useSelector((state) => state.products.currentProducts);
  const documents = useSelector((state) => state.documents.currentDocuments);
  const resultDocs = useSelector((state) => state.documents.result);
  const filteredDocuments = useSelector(
    (state) => state.documents.filteredDocuments
  );
  const [checkAll, setCheckAll] = React.useState(false);
  const [indeterminate, setIndeterminate] = React.useState(true);

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

  const onChange = (list) => {
    // setCheckedList(list);
    setIndeterminate(!!list.length && list.length < fields.length);
    setCheckAll(list.length === fields.length);
  };

  const onCheckAllChange = (e) => {
    // setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
    console.log("checkedd", e.target.checked);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
    dispatch(getProducts(value[0]));
  }

  //   const children = [];
  // for (let i  = 0 ; i < fields.length; i++) {
  //   children.push(<Option key={i.id}>{i.name}</Option>);
  // }
  return (
    <>
  
      <Row style={{margin:"20px 0px", width: "100%", justifyContent: "center"}}>
        <Col xs={24} xl={16}>
          <Row style={{justifyContent: "center"}}>
            <Col className="col-span" span={7}  style={{marginRight: "5px", padding: "2rem 0.5rem 0.5rem 0.5rem",
    background: "#BFD5ED"}}>
              <Row classname="rowtopic" style={{marginRight: "5px", display: "flex"}}>
                <Col span={24} style={{display: "flex"}}>
                  <span>
                  <img src={factCheck} alt="themenfeld" className="fatcheck" style={{width: "2rem"}} />
                  </span>
                  <Title className="topic-label" style={{marginLeft: "1rem", color: "white"}} level={3}>Themenfeld</Title>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Select
                    mode="multiple"
                    showArrow
                    showSearch //defaultOpen
                    allowClear
                    style={{ width: "100%" }}
                    placeholder="Themenfeld auswählen"
                    onChange={handleChange}
                  >
                    {fields.map((field) => (
                      <Option value={field.value}>{field.name}</Option>
                    ))}
                  </Select>
                </Col>
              </Row>
            </Col>

            
            <Col className="col-span" span={7} style={{marginRight: "5px", padding: "2rem 0.5rem 0.5rem 0.5rem",
    background: "#BFD5ED"}}>
              <Row className="rowtopic">
                <Col span={24} style={{display: "flex"}}>
                <span>
                  <img src={apps} alt="produkt" className="apps" style={{width: "2rem"}} />
                  </span>
                  <Title style={{marginLeft: "1rem"}} level={3}>Produkt</Title>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Select
                    mode="multiple"
                    allowClear
                    showArrow
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="Produkt auswählen"
                    onChange={handleChange}
                  >
                    {products.map((product) => (
                      <Option value={product.value}>{product.name}</Option>
                    ))}
                  </Select>
                </Col>
              </Row>
            </Col>

            <Col className="col-span" span={7} style={{marginRight: "5px", padding: "2rem 0.5rem 0.5rem 0.5rem",
    background: "#BFD5ED"}}>
              <Row className="rowtopic">
                <Col span={24} style={{display: "flex"}}>
                  <span>
                  <img src={description} alt="dokumententyp" className="description" style={{width: "2rem"}} />
                  </span>
                  <Title style={{marginLeft: "1rem", fontColor: "#22366F"}} level={3}>Dokumententyp</Title>
                </Col>
              </Row>
                    <Row>
                      <Col span={24}>
                        
                        <Select
                          mode="multiple"
                          allowClear
                          showArrow
                          showSearch
                          style={{ width: "100%" }}
                          placeholder="Dokumententyp auswählen"
                          // defaultValue={['a10', 'c12']}
                          onChange={handleChange}
                        >
                          {documents.map((document) => (
                            <Option value={document.value}>{document.name}</Option>
                          ))}
                        </Select>
                      </Col>
                    </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{margin:"20px 0px", width: "100%", justifyContent: "center"}}>
        <Col xs={21} xl={16}>
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


export default Demo3;

