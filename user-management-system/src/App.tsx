import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Input, InputNumber, Button, Form } from 'antd';
import { RootState } from './store/store';
import { submitForm, editUser, deleteUser } from './store/features/formSlice';
import "./App.css"

export default function App() {
  const dispatch = useDispatch();
  const dataSource = useSelector((state: RootState) => state.form.dataSource);
  const [formData, setFormData] = useState({
    name: '',
    age: 0,
    address: '',
  });
  const [editingKey, setEditingKey] = useState(null);
  const [editData, setEditData] = useState({ name: '', age: 0, address: '' });
  const isEditing = (record: any) => record.key === editingKey;

  const handleSubmit = () => {
    const newUser = {
      ...formData,
      key: Date.now(),
    };
    dispatch(submitForm(newUser));
    setFormData({ name: '', age: 0, address: '' });
  };

  const handleEdit = (record: any) => {
    setEditingKey(record.key);
    setEditData({ name: record.name, age: record.age, address: record.address });
  };

  const handleSave = (key: number) => {
    dispatch(editUser({ ...editData, key }));
    setEditingKey(null);
  };

  const handleCancel = () => {
    setEditingKey(null);
  };

  const handleDelete = (key: number) => {
    dispatch(deleteUser(key));
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (_: any, record: any) =>
        isEditing(record) ? (
          <Input
            value={editData.name}
            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
          />
        ) : (
          record.name
        ),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      render: (_: any, record: any) =>
        isEditing(record) ? (
          <InputNumber
            value={editData.age}
            onChange={(value) => setEditData({ ...editData, age: value ?? 0 })}
          />
        ) : (
          record.age
        ),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (_: any, record: any) =>
        isEditing(record) ? (
          <Input
            value={editData.address}
            onChange={(e) => setEditData({ ...editData, address: e.target.value })}
          />
        ) : (
          record.address
        ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => {
        const editable = isEditing(record);
        return editable ? (
          <>
            <Button type="link" onClick={() => handleSave(record.key)}>
              Save
            </Button>
            <Button type="link" onClick={handleCancel}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button type="primary" onClick={() => handleEdit(record)} style={{marginRight: 10}}>Edit</Button>
            <Button type="primary" danger onClick={() => handleDelete(record.key)}>Delete</Button>
          </>
        );
      },
    },
  ];


  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
  const validateMessages = {
    required: '${label} is required!',
    types: {
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div className='container'>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600, marginTop: 50 }}
        validateMessages={validateMessages}
      >
        <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
          <Input value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        </Form.Item>
        <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99, required:true }]}>
          <InputNumber type='number' value={formData.age}
            onChange={(value) => setFormData({ ...formData, age: value ?? 0 })} />
        </Form.Item>
        <Form.Item name={['user', 'address']} label="Address" rules={[{required:true}]}>
          <Input value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>


      <br />
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

