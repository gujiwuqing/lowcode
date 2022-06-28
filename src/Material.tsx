import React from 'react';
import {EditOutlined,FolderAddOutlined} from '@ant-design/icons'
import {Row,Col} from 'antd';
const list=[
  {
    icon:<EditOutlined/>,
    title:'输入框',
    type:'input'
  },{
  icon:<FolderAddOutlined />,
    title: '上传图片',
    type: 'upload'
  }
]


const Material = () => {
  return (
    <div className='material'>
      <Row gutter={12}>
        {
          list.map(item=>{
            return (
              <Col key={item.type} span={12}>
                <div draggable={true} data-type={item.type} onDragStart={(e)=>{
                  console.log(e.target?.dataset?.type);
                }}>
                  {item.icon}
                  <span>{item.title}</span>
                </div>
              </Col>
            )
          })
        }
      </Row>
    </div>
  );
};
export default Material;
