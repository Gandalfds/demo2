import React, { Component } from "react";
import { Form, Input, Button, Select } from "antd";

import "./style";

const { Option } = Select;
const { TextArea } = Input;



function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryValue: 0,
      shippingValue: 0,
      totalValue: 0
    };
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

  getCategoryVlaue =(obj)=>{
    console.log(obj);
    let {shippingValue} = this.state;
    this.setState({
      categoryValue: obj,
      totalValue: obj + shippingValue
    });
  }

  getShippingVlaue = (obj) =>{
    console.log(obj);
    let {categoryValue} = this.state;
    this.setState({
      shippingValue: obj,
      totalValue: obj + categoryValue
    });
  }

  render() {
    let {totalValue} = this.state;
    const { getFieldDecorator, getFieldsError } = this.props.form;
    const categorys = [
      {name: "Lobster",value:10.00,unit:"$"},
      {name: "Shark",value:20.00,unit:"$"},
      {name: "Abalone",value:25.00,unit:"$"},
      {name: "Crab",value:30.00,unit:"$"}
    ];
    const shippings = [
      {name: "Ocean",value:35.00,unit:"$"},
      {name: "Plane",value:40.00,unit:"$"},
      {name: "Train",value:25.00,unit:"$"}
    ];
    console.log(totalValue);
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
                  <Select placeholder="Select a category" onChange={this.getCategoryVlaue}>
                    {categorys.map((item,index)=>(
                      <Option value={item.value} key={index}>{item.name}</Option>
                    ))}
                  </Select>
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
                  <Select placeholder="Select a shipping type" onChange={this.getShippingVlaue}>
                  {shippings.map((item,index)=>(
                    <Option value={item.value} key={index}>{item.name}</Option>
                  ))}
                  </Select>
                )}
              </Form.Item>
            </div>
            <div className="total">
              <div className="content">
                <span className="no">HS 0202.20.06.00</span>
                <span className="duty">Duty: ${totalValue}/Kg</span>
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
