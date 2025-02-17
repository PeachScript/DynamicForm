import React, { FC, useState, ChangeEvent } from 'react';
import Field from '../Field';
import Title from '../Title';
import FileGroup from './fileGroup';
import { INomarFileProps, INomarFileItemProps } from './interface';
import FileIcon from '../../assets/file.png';

const prefixCls = 'alitajs-dform-file';

const DformFile: FC<INomarFileProps> = (props) => {
  const {
    fieldProps,
    required = false,
    title,
    rules,
    extra = <img src={FileIcon} alt="" className={`${prefixCls}-img`} />,
    onChange,
    defaultValue,
    upload,
    titleProps,
  } = props;

  // 该函数没被使用，因此注释
  // const fileIns = (e: ChangeEvent<HTMLInputElement> | any) => {
  //   if (e.target.files) {
  //     const fileList = Object.keys(e.target.files).map(
  //       (item) => e.target.files[item],
  //     );
  //     upload(fileList);
  //   }
  // };

  // const extraContent = () => (
  //   <React.Fragment>
  //     <input
  //       type="file"
  //       multiple
  //       className="alitajs-dform-file-input"
  //       onChange={fileIns}
  //     />
  //     <span className="alitajs-dform-file-extra">{extra}</span>
  //   </React.Fragment>
  // );

  const fileChange = (
    res: INomarFileItemProps[],
    item: INomarFileItemProps,
  ) => {
    if (onChange) onChange(res, item);
  };

  return (
    <Title {...titleProps}>
      <div className={prefixCls}>
        <Field
          name={fieldProps}
          rules={rules || [{ required, message: `请选择${title}` }]}
          initialValue={defaultValue}
        >
          <FileGroup {...props} onChange={fileChange} />
        </Field>
      </div>
    </Title>
  );
};

DformFile.displayName = 'dformFile';
export default DformFile;
