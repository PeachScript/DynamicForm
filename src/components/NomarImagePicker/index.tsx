import React, { FC } from 'react';
import ImagePickerGroup from './imagePickerGroup';
import { ImageFile, INomarImagePickerProps } from './interface';
import Field from '../Field';
import Title from '../Title';
import { allPrefixCls } from '../../const/index';
import './index.less';

const DformImagePicker: FC<INomarImagePickerProps> = (props) => {
  const {
    coverStyle,
    title,
    required = false,
    fieldProps,
    rules,
    hasStar = true,
    limitSize = 0,
    subTitle,
    hidden = false,
    extra = '',
    onChange,
    defaultValue = [],
    titleProps,
    ...otherProps
  } = props;

  const imageChange = (
    files: ImageFile[],
    operationType: string,
    index: number | undefined,
  ) => {
    console.log(files);
    console.log(operationType);
    console.log(index);

    if (onChange) onChange(files, operationType, index);
  };

  return (
    <Title {...titleProps}>
      <div className={`${allPrefixCls}-image`}>
        <Field
          name={fieldProps}
          rules={rules || [{ required, message: `请选择${title}` }]}
          initialValue={defaultValue}
        >
          <ImagePickerGroup
            {...otherProps}
            onChange={imageChange}
            limitSize={limitSize}
          />
        </Field>
      </div>
    </Title>
  );
};

DformImagePicker.displayName = 'dformImagePicker';
export default DformImagePicker;
