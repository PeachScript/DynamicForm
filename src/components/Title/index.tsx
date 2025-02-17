import React, { FC } from 'react';
import classnames from 'classnames';
import Hidden from '../Hidden';
import { allPrefixCls } from '../../const/index';

export interface TitleProps {
  positionType?: 'vertical' | 'horizontal';
  hidden?: boolean;
  required?: boolean;
  hasStar?: boolean;
  title?: string;
  subTitle?: string | React.ReactNode;
  extra?: string | React.ReactNode;
  error: any;
  fieldProps: string;
}

const Title: FC<TitleProps> = ({
  children,
  positionType = 'horizontal',
  hidden = false,
  required = false,
  hasStar = true,
  title = '',
  subTitle,
  extra,
  error,
  fieldProps,
}) => {
  const isVertical = positionType === 'vertical';
  return (
    <Hidden hidden={hidden}>
      <div
        className={classnames({
          [`${allPrefixCls}${isVertical ? '-vertical' : ''}-item`]: true,
          [`${allPrefixCls}-error`]: error && !!error[fieldProps],
        })}
      >
        {isVertical && (
          <div
            className={classnames({
              [`${allPrefixCls}-title`]: true,
              [`${allPrefixCls}-vertical-title`]: true,
            })}
          >
            {required && hasStar && (
              <div className={`${allPrefixCls}-redStar`}>*</div>
            )}
            <div>{title}</div>
            {subTitle}
            {extra !== '' && isVertical && (
              <div className={`${allPrefixCls}-extra`}>{extra}</div>
            )}
          </div>
        )}
        {children}
        {error && !!error[fieldProps] && (
          <div className={`${allPrefixCls}-error-text`}>
            {error[fieldProps]}
          </div>
        )}
      </div>
    </Hidden>
  );
};

export default Title;
