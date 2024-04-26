import "./Another.css";
import { Button, DatePicker, Form, Input, Select } from "antd";
import { Col, Row } from "react-bootstrap";


const Another = () => {

  return (
    <div style={{ maxWidth: 700, margin: "auto" }} className=" formTemplate">
      <h3 className="title"> PRAN-RFL PCML DATA INPUT</h3>
      <Form
        name="basic"
        className="login-form"
        onFinish={onFinish}
        layout="vertical"
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row xs={1} sm={1} md={2} lg={2} xl={2} xxl={2}>
          <Col>
            <Form.Item
              name="date"
              rules={[
                {
                  required: false,
                  message: "Please input date!",
                },
              ]}
            >
              <div className="d-flex align-items-center formItem">
                <p className="mb-0"> DATE</p>
                <DatePicker onChange={onChange} />
              </div>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="date"
              rules={[
                {
                  required: false,
                  message: "Please input section!",
                },
              ]}
            >
              <div className="d-flex align-items-center formItem">
                <p className="mb-0"> SECTION</p>
                <Select
                  defaultValue="jack"
                  options={[
                    {
                      value: "jack",
                      label: "Select Section",
                    },
                    {
                      value: "luchy",
                      label: "Section A",
                    },
                    {
                      value: "lucy",
                      label: "Section B",
                    },
                    {
                      value: "Yiminghe",
                      label: "Section C",
                    },
                  ]}
                />
              </div>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="idNo"
              rules={[
                {
                  required: true,
                  message: "Please input salesman Id!",
                },
              ]}
            >
              <div className="d-flex align-items-center formItem">
                <p className="mb-0"> ID NO</p>
                <Input type="text" placeholder="Salesman ID" />
              </div>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input salesman name!",
                },
              ]}
            >
              <div className="d-flex align-items-center formItem">
                <p className="mb-0"> NAME</p>
                <Input type="text" placeholder="Product Name" />
              </div>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="achivement"
              rules={[
                {
                  required: true,
                  message: "Please input salesman achivement!",
                },
              ]}
            >
              <div className="d-flex align-items-center formItem">
                <p className="mb-0"> ACHIVEMENT</p>
                <Input type="text" placeholder="Achivement" />
              </div>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="breakdown"
              rules={[
                {
                  required: true,
                  message: "Please input salesman breakdown!",
                },
              ]}
            >
              <div className="d-flex align-items-center formItem">
                <p className="mb-0"> BREAKDOWN</p>
                <Input type="text" placeholder="Breakdown Time" />
              </div>
            </Form.Item>
          </Col>
        </Row>
        <Button
          htmlType="submit"
          className="w-50 d-flex align-items-center justify-content-center mx-auto formBtn"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Another;
