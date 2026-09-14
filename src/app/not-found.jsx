import {Result} from 'antd';

export default function NotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="A página que você visitou não existe."
    />
  );
}