/**
 * title: 基础 单选框
 * desc: 表单使用 demo
 */

import React, { FC } from 'react';
import { Button, WhiteSpace } from 'antd-mobile';
import DynamicForm, {
  useForm,
  Store,
  ValidateErrorEntity,
} from '@alitajs/dform';
import DformPicker from '../';

const Page: FC = () => {
  const [form] = useForm();
  const onFinish = (values: Store) => {
    // eslint-disable-next-line no-console
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  const aliasCityList = [
    {
      cityId: '深圳',
      cityName: 'shenzhen',
    },
    {
      cityId: '杭州',
      cityName: 'hangzhou',
    },
    {
      cityId: '广州',
      cityName: 'guangzhou',
    },
  ];

  const cityList = [
    {
      label: '北京',
      value: 'beijing',
    },
    {
      label: '上海',
      value: 'shanghai',
    },
    {
      label: '福州',
      value: 'fuzhou',
    },
  ];

  const formsValues = {
    youCity: 'fuzhou',
  };
  const formProps = {
    onFinish,
    onFinishFailed,
    formsValues,
    form,
    autoLineFeed: false,
    isDev: false,
  };
  return (
    <>
      <DynamicForm {...formProps}>
        <DformPicker
          fieldProps="city"
          data={cityList}
          title="城市(默认值)"
          labelNumber={6}
          defaultValue="shanghai"
        />
        <DformPicker
          fieldProps="myCity"
          required={true}
          data={aliasCityList}
          title="我喜欢的城市"
          labelNumber={7}
          placeholder="请选择我喜欢的城市"
          alias={{
            label: 'cityId',
            value: 'cityName',
          }}
        />
        <DformPicker
          fieldProps="youCity"
          data={cityList}
          title="选择你喜欢的城市"
          positionType="vertical"
          onChange={(e) => console.log(e)}
          disabled
        />
      </DynamicForm>
      <WhiteSpace size="sm" />
      <Button type="primary" onClick={() => form.submit()}>
        Submit
      </Button>
    </>
  );
};

export default Page;
