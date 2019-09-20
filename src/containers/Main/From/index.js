import React, { Component } from "react";
import { Form, Input, Button, Select } from "antd";

import "./style";

const { Option } = Select;
const { TextArea } = Input;

const Childrens = [];
for (let i = 10; i < 36; i++) {
  Childrens.push(
    <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
  );
}

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form;

    return (
      <div className="input-areas">
        <div className="form-dis">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <div className="left">
              <label title="titles">What are you importing?</label>
              <Form.Item>
                {getFieldDecorator("titles", {
                  rules: [
                    { required: true, message: "Please input the title!" }
                  ]
                })(
                  <Input
                    placeholder="Enter the title"
                    style={{ height: "48px" }}
                  />
                )}
              </Form.Item>
              <label title="describe">Describe your item...</label>
              <Form.Item>
                {getFieldDecorator("describe", {
                  rules: [
                    { required: true, message: "Please input the describe!" }
                  ]
                })(
                  <TextArea
                    placeholder="Enter the describe"
                    style={{ height: "75px" }}
                  />
                )}
              </Form.Item>
              <label title="category">Select a category</label>
              <Form.Item>
                {getFieldDecorator("category", {
                  rules: [
                    { required: true, message: "Please Select a category!" }
                  ]
                })(
                  <Select placeholder="Select a category">{Childrens}</Select>
                )}
              </Form.Item>
              <label>Select a shipping type...</label>
              <Form.Item>
                {getFieldDecorator("shipping", {
                  rules: [
                    {
                      required: true,
                      message: "Please Select a shipping type!"
                    }
                  ]
                })(
                  <Select placeholder="Select a shipping type">
                    {Childrens}
                  </Select>
                )}
              </Form.Item>
            </div>
            <div className="total">
              <div className="content">
                <span className="no">HS 0202.20.06.00</span>
                <span className="duty">Duty: $50.00/kg</span>
                <span className="spe-duty">Special Duty</span>
                <span className="detail">
                  Free: A+, AU, BH, CA, CL, CO, D, E*, IL, JO, KR, MA, MX, OM,
                  P, PA, PE, SG Confused about Special Duties? Talk to one of
                  our Customs Experts.
                </span>
                <span className="create">Create your free account today</span>
                <Form.Item>
                  <Button
                    htmlType="submit"
                    disabled={hasErrors(getFieldsError())}
                    className="submit-btn"
                  >
                    Get Start
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

const SubmitForms = Form.create({ name: "submit_form" })(Forms);
export default SubmitForms;
