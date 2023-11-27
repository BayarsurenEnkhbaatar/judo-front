import React from 'react'
import {Form, Input} from 'antd'

const TeamsRegister = () => {
  return (
    <div className='bg-white p-8 rounded-xl xs:mt-2'>
      <div className='font-Roboto'>
        <h1 className='text-xl font-bold text-center uppercase'>Тамирчины бүртгэл</h1>
        <p className='text-xs font-bold text-center uppercase'>Та мэдээллээ үнэн зөв бөглөж илгээнэ үү</p>
        <div>
          <Form className='grid xs:grid-cols-1 md:grid-cols-2 gap-2 mt-4'>
            <Form.Item
              name="Овог"
              label="Овог"
              rules={[
                {
                  required: true,
                  message: "Овог оруулна уу !"
                },
                {whitespace: true},
                {min:1}
              ]}
            >
              <Input placeholder="Овог оруулна уу"/>
            </Form.Item>
            <Form.Item
              name="Нэр"
              label="Нэр"
              rules={[
                {
                  required: true,
                  message: "Нэр оруулна уу !"
                },
                {whitespace: true},
                {min:1}
              ]}
            >
              <Input placeholder="Нэр оруулна уу"/>
            </Form.Item>
            <Form.Item
              name="Нэр"
              label="Нэр"
              rules={[
                {
                  required: true,
                  message: "Нэр оруулна уу !"
                },
                {whitespace: true},
                {min:1}
              ]}
            >
              <Input placeholder="Нэр оруулна уу"/>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default TeamsRegister