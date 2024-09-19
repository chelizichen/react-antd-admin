import type { MyPageTableOptions } from '@/components/business/page';
import type { BuniesssUser } from '@/interface/business';
import type { FC } from 'react';

import { Space, Tag } from 'antd';

import { getBusinessUserList } from '@/api/business';
import MyButton from '@/components/basic/button';
import MyPage from '@/components/business/page';

const { Item: SearchItem } = MyPage.MySearch;

const tableColums: MyPageTableOptions<BuniesssUser> = [
  { title: '股票代码', dataIndex: 'q_code', key: 'q_code' },
  { title: '总资产', dataIndex: 'q_personal_assets', key: 'q_personal_assets' },
  { title: '状态', dataIndex: 'q_status', key: 'q_status' },
  { title: '总资产', dataIndex: 'q_user_id', key: 'q_user_id' },
];

const BusinessWithSearchPage: FC = () => {
  return (
    <MyPage
      pageApi={getBusinessUserList}
      searchRender={
        <>
          <SearchItem
            name="type"
            label={'交易类型'}
            type="radio"
            initialValue={0}
            options={[
              { label: '全选', value: 0 },
              { label: '买入', value: 1 },
              { label: '卖出', value: 2 },
            ]}
          />
          <SearchItem label="股票名称" name="keyword" type="input" />
        </>
      }
      tableOptions={tableColums}
    ></MyPage>
  );
};

export default BusinessWithSearchPage;
