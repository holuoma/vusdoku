import { Layout, Breadcrumb, Typography, Row, Col } from "antd";

const { Content } = Layout;
const { Title } = Typography;

function Home() {
  return (
    <>
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>

        </Breadcrumb>
        <Row>
      <Col span={24} style={{textAlign:"center"}}>
        <div className="site-layout-content">
          <Title>Content will here</Title>
        </div>

      </Col>
    </Row>
      </Content>
    </Layout>
    
    </>
  );
}

export default Home;
