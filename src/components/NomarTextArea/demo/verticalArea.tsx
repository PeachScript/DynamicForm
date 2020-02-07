/**
 * title: 基础 垂直多行文本输入框
 * desc: 基础控件
 */
import React, { FC } from 'react';
import { List } from 'antd-mobile';
import Form from 'rc-field-form';
import NomarTextArea from '..';

const VerticalArea = () => {
  return (
    <Form>
      <List>
        <NomarTextArea
          title="备注"
          fieldProps="Remarks"
          required={true}
          placeholder="请输入..."
          positionType="vertical"
        />
      </List>
    </Form>
  );
};

export default VerticalArea;
