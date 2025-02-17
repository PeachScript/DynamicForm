import * as React from 'react';
import { render, testA11y, fireEvent, waitFor, sleep } from '@alita/test';
import Form from 'rc-field-form';
import NomarMultiplePicker from '..';
import BasicTest from './demos/basic';

const cityData = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '福州', value: 'fuzhou' },
];

const props = {
  fieldProps: 'myCity',
  required: true,
  data: cityData,
  title: '我喜欢的城市',
  labelNumber: 7,
  placeholder: '请选择我喜欢的城市',
};

it('passes multiplepicker a11y test', async () => {
  const { container, getByText } = render(
    <div>
      <Form>
        <NomarMultiplePicker {...props} />
      </Form>
    </div>,
  );
  fireEvent.click(getByText('请选择我喜欢的城市'));
  await testA11y(container);
});

test('render Basic', async () => {
  const onFinish = jest.fn();
  const onFinishFailed = jest.fn();
  const onChange = jest.fn();
  const { getByText } = render(
    <BasicTest
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onChange={onChange}
    />,
  );
  await waitFor(() => {
    fireEvent.click(getByText('Submit'));
  });
  expect(onFinishFailed).toBeCalled();
  fireEvent.click(getByText('请选择我喜欢的食物111'));
  fireEvent.click(getByText('取消'));
  fireEvent.click(getByText('请选择我喜欢的食物111'));
  fireEvent.click(getByText('宫保鸡丁'));
  await waitFor(() => {
    expect(getByText('宫保鸡丁')?.parentElement?.lastChild).toHaveClass(
      'alitajs-dform-tick',
    );
  });
  fireEvent.click(getByText('确定'));
  expect(onChange).toBeCalled();
  await waitFor(() => {
    expect(getByText('宫保鸡丁')).toHaveClass('alitajs-dform-text-item-text');
  });
  await waitFor(() => {
    fireEvent.click(getByText('Submit'));
  });
  expect(onFinish).toBeCalled();
});
