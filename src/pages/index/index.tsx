import type { FC } from 'react';

import { Text, View } from '@tarojs/components';

import { AtButton } from 'taro-ui';
import 'taro-ui/dist/style/components/button.scss'; // 按需引入

import './index.scss';

const IndexPage: FC = () => {
  return (
    <View className="w-[100vw] h-[100vh] bg-[#bfa]">
      <Text>Hello world!</Text>
      <AtButton type="primary">I need Taro UI</AtButton>
      <Text>Taro UI 支持 Vue 了吗？</Text>
      <AtButton type="primary" circle>
        支持
      </AtButton>
      <Text>共建？</Text>
      <AtButton type="secondary" circle>
        来
      </AtButton>
    </View>
  );
};

export default IndexPage;
